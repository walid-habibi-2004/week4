const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const category = req.query.category;

    const filter = {};
    if (category) filter.category = category;

    const products = await Product.find(filter)
      .select("title price image category")
      .sort({ price: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json(products);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};