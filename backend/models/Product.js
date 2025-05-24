const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, enum: ["shirts", "dresses"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

