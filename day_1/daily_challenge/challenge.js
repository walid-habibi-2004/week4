<<<<<<< HEAD
db.createCollection("products")

db.products.insertMany([
    {
        name: "Solar Power Bank", category: "Electronics",
        price: 49.99,
        stock: 25
    },
    {
        name: "Bamboo Desk Organizer",
        category: "Home",
        price: 29.99,
        stock: 100
    },
    {
        name: "Recycled Paper Notebook",
        category: "Stationery",
        price: 5.99,
        stock: 3
    },
    {
        name: "LED Energy Saving Bulb",
        category: "Home",
        price: 9.99,
        stock: 60
    },
    {
        name: "Wireless Eco Headphones",
        category: "Electronics",
        price: 89.99,
        stock: 15
    }
])


db.products.find(
  {stock: {$lt: 10}}
)


// {
//   _id: ObjectId('69a56c43bfb92de8c814a4d5'),
//   name: 'Recycled Paper Notebook',
//   category: 'Stationery',
//   price: 5.99,
//   stock: 3
// }

db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)




db.products.find().sort({ price: -1 }).limit(1)


// {
//   _id: ObjectId('69a56c43bfb92de8c814a4d7'),
//   name: 'Wireless Eco Headphones',
//   category: 'Electronics',
//   price: 98.989,
//   stock: 15
// }
=======
db.createCollection("products")

db.products.insertMany([
    {
        name: "Solar Power Bank", category: "Electronics",
        price: 49.99,
        stock: 25
    },
    {
        name: "Bamboo Desk Organizer",
        category: "Home",
        price: 29.99,
        stock: 100
    },
    {
        name: "Recycled Paper Notebook",
        category: "Stationery",
        price: 5.99,
        stock: 3
    },
    {
        name: "LED Energy Saving Bulb",
        category: "Home",
        price: 9.99,
        stock: 60
    },
    {
        name: "Wireless Eco Headphones",
        category: "Electronics",
        price: 89.99,
        stock: 15
    }
])


db.products.find(
  {stock: {$lt: 10}}
)


// {
//   _id: ObjectId('69a56c43bfb92de8c814a4d5'),
//   name: 'Recycled Paper Notebook',
//   category: 'Stationery',
//   price: 5.99,
//   stock: 3
// }

db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)




db.products.find().sort({ price: -1 }).limit(1)


// {
//   _id: ObjectId('69a56c43bfb92de8c814a4d7'),
//   name: 'Wireless Eco Headphones',
//   category: 'Electronics',
//   price: 98.989,
//   stock: 15
// }
>>>>>>> origin/main
