// =============> exercice 1
db.createCollection("students")

db.students.insertMany([
  { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
  { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])


// =============> exercice 2

db.students.find({
  age: {
    $gte: 18,
    $lte: 25
  }
})

// output
// {
//   _id: ObjectId('69a5640bbfb92de8c814a4ce'),
//   name: 'Yassine',
//   age: 19,
//   city: 'Rabat',
//   major: 'AI'
// }

// {
//   _id: ObjectId('69a5640bbfb92de8c814a4d0'),
//   name: 'Kaito',
//   age: 22,
//   city: 'Tokyo',
//   major: 'Web Dev'
// }

// {
//   _id: ObjectId('69a5640bbfb92de8c814a4d2'),
//   name: 'Marcus',
//   age: 24,
//   city: 'New York',
//   major: 'AI'
// }

db.students.updateOne(
  {name: "Yassine"},
  {$set: {city: "Casablanca"}}
)

// {
//   _id: ObjectId('69a5640bbfb92de8c814a4ce'),
//   name: 'Yassine',
//   age: 19,
//   city: 'Casablanca',
//   major: 'AI'
// }

db.students.deleteOne({
  name: "Sophia"
})

// {
//   acknowledged: true,
//   deletedCount: 1
// }

// 🏆 Boss Level Challenge (Optional)

db.students.updateMany(
  {major: "AI"},
  {$set: {major: "Generative AI"}}
)

db.students.find().pretty()

// {
//   _id: ObjectId('69a5640bbfb92de8c814a4ce'),
//   name: 'Yassine',
//   age: 19,
//   city: 'Casablanca',
//   major: 'Generative AI'
// }
// {
//   _id: ObjectId('69a5640bbfb92de8c814a4d0'),
//   name: 'Kaito',
//   age: 22,
//   city: 'Tokyo',
//   major: 'Web Dev'
// }
// {
//   _id: ObjectId('69a5640bbfb92de8c814a4d1'),
//   name: 'Elena',
//   age: 31,
//   city: 'Madrid',
//   major: 'Data Science'
// }
// {
//   _id: ObjectId('69a5640bbfb92de8c814a4d2'),
//   name: 'Marcus',
//   age: 24,
//   city: 'New York',
//   major: 'Generative AI'
// }