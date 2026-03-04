<<<<<<< HEAD
//=================> exercice 1
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Post = mongoose.model('Post', postSchema);

const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/testDB');

  const admin = await User.create({ name: 'Lina', email: 'lina@example.com' });
  await Post.create({ title: 'Mongoose is Awesome', content: 'Learning relationships in MongoDB', author: admin._id });

  const postWithData = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');
  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`);

  await mongoose.disconnect();
};

run();

//================> exercice 2


const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
=======
//==================> exercice 1

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => {
    console.log('✅ Connection Successful! Node.js is talking to MongoDB.');
  })
  .catch((err) => {
    console.error('❌ Connection Failed:', err);
  });

//==================> exercice 2

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => {
    console.log('✅ Connection Successful! Node.js is talking to MongoDB.');
  })
  .catch((err) => {
    console.error('❌ Connection Failed:', err);
  });

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is mandatory'] 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  age: { 
    type: Number, 
    min: [18, 'Students must be at least 18 years old'] 
  }
>>>>>>> f34934d (Resolve merge conflicts)
});

const Student = mongoose.model('Student', studentSchema);

<<<<<<< HEAD
const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/testDB');

  const student = await Student.create({ name: 'Ali' });
  console.log(student);

  student.name = 'Ali Updated';
  await student.save();
  console.log(student);

  await mongoose.disconnect();
};

run();
=======
const testStudent = async () => {
  try {
    const student = new Student({
      name: "Omar",
      email: "omar@school.com",
      age: 16
    });
    await student.save();
  } catch (error) {
    console.log("Validation Error Caught:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

testStudent()
>>>>>>> f34934d (Resolve merge conflicts)
