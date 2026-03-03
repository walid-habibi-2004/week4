const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: { type: Date, default: Date.now }
  }]
});
const Post = mongoose.model('Post', postSchema);

const seedData = async () => {
  await User.deleteMany({});
  await Post.deleteMany({});

  const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
  const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

  await Post.create({
    title: "MongoDB Relationships",
    content: "Today we learned about population...",
    author: lina._id,
    comments: [
      { text: "Great post!", author: adam._id }
    ]
  });
};

const getFullBlogFeed = async () => {
  const feed = await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username');

  console.log(JSON.stringify(feed, null, 2));
};

const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/blogPlatform');

  await seedData();
  await getFullBlogFeed();

  await mongoose.disconnect();
};

run();
