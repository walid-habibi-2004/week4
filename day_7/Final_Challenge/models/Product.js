const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: String,
    stock: { type: Number, default: 0 }
  },
  { timestamps: true }
);

productSchema.index({ category: 1, price: -1 });

module.exports = mongoose.model("Product", productSchema);