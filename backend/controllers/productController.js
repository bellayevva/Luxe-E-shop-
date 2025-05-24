const Product = require("../models/Product");

// GET /api/products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST /api/products
const createProduct = async (req, res) => {
  const { name, price, category, image, description } = req.body;
  const newProduct = new Product({ name, price, category, image, description });
  await newProduct.save();
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  createProduct,
};
