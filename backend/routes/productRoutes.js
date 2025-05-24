const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Získání všech produktů
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Přidání nového produktu
router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;


