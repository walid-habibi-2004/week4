<<<<<<< HEAD
// ================> exercice 1
db.createCollection("users")


db.users.insertOne({
  name: "Yassmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})


db.users.find()

// output 

// {
//   _id: ObjectId('69a5eee02bb8a39e6171185f'),
//   name: 'Yassmine',
//   email: 'yasmine@tech.ma',
//   address: {
//     city: 'Casablanca',
//     country: 'Morocco',
//     postalCode: '20000'
//   }
// }


// ================> exercice 2

db.createCollection("orders")

db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("69a5eee02bb8a39e6171185f")
})

db.orders.find()

// output

// {
//   _id: ObjectId('69a5f2492bb8a39e61711860'),
//   orderNumber: 'ORD-99X',
//   total: 1500,
//   currency: 'MAD',
//   status: 'Processing',
//   userId: ObjectId('69a5eee02bb8a39e6171185f')
// }
=======
// ================> exercice 1
db.createCollection("users")


db.users.insertOne({
  name: "Yassmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})


db.users.find()

// output 

// {
//   _id: ObjectId('69a5eee02bb8a39e6171185f'),
//   name: 'Yassmine',
//   email: 'yasmine@tech.ma',
//   address: {
//     city: 'Casablanca',
//     country: 'Morocco',
//     postalCode: '20000'
//   }
// }


// ================> exercice 2

db.createCollection("orders")

db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("69a5eee02bb8a39e6171185f")
})

db.orders.find()

// output

// {
//   _id: ObjectId('69a5f2492bb8a39e61711860'),
//   orderNumber: 'ORD-99X',
//   total: 1500,
//   currency: 'MAD',
//   status: 'Processing',
//   userId: ObjectId('69a5eee02bb8a39e6171185f')
// }
>>>>>>> f34934d (Resolve merge conflicts)
