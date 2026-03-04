const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  try {
    const { items } = req.body;

    const productIds = items.map(i => i.productId);
    const products = await Product.find({ _id: { $in: productIds } });

    const orderItems = items.map(item => {
      const product = products.find(p => p._id.toString() === item.productId);

      return {
        productId: product._id,
        title: product.title,
        price: product.price,
        quantity: item.quantity,
        image: product.image
      };
    });

    const totalPrice = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalPrice
    });

    res.status(201).json(order);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};