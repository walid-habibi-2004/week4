<<<<<<< HEAD
db.users.insertOne({
  username: "devYasmine",
  bio: "Full-stack developer passionate about NoSQL.",
  socialLinks: {
    github: "github.com/devYasmine",
    linkedin: "linkedin.com/in/devYasmine",
    twitter: "twitter.com/devYasmine"
  }
})


db.posts.insertOne({
  title: "Getting Started With DevBlog",
  body: "Welcome to my first technical post...",
  authorId: ObjectId('69a5f7732bb8a39e61711861'),
  tags: ["MongoDB", "Backend", "Architecture"],
  comments: []
})


db.posts.find()

// output

// {
//   _id: ObjectId('69a5f8a62bb8a39e61711862'),
//   title: 'Getting Started With DevBlog',
//   body: 'Welcome to my first technical post...',
//   authorId: ObjectId('69a5f7732bb8a39e61711861'),
//   tags: [
//     'MongoDB',
//     'Backend',
//     'Architecture'
//   ],
//   comments: []
// }
=======
db.users.insertOne({
  username: "devYasmine",
  bio: "Full-stack developer passionate about NoSQL.",
  socialLinks: {
    github: "github.com/devYasmine",
    linkedin: "linkedin.com/in/devYasmine",
    twitter: "twitter.com/devYasmine"
  }
})


db.posts.insertOne({
  title: "Getting Started With DevBlog",
  body: "Welcome to my first technical post...",
  authorId: ObjectId('69a5f7732bb8a39e61711861'),
  tags: ["MongoDB", "Backend", "Architecture"],
  comments: []
})


db.posts.find()

// output

// {
//   _id: ObjectId('69a5f8a62bb8a39e61711862'),
//   title: 'Getting Started With DevBlog',
//   body: 'Welcome to my first technical post...',
//   authorId: ObjectId('69a5f7732bb8a39e61711861'),
//   tags: [
//     'MongoDB',
//     'Backend',
//     'Architecture'
//   ],
//   comments: []
// }
>>>>>>> f34934d (Resolve merge conflicts)
