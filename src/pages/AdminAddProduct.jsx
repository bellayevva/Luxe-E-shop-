import React, { useState } from "react";
import axios from "axios";

function AdminAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("shirts");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const uploadRes = await axios.post("/api/upload", formData);
      const imageUrl = uploadRes.data.url;

      await axios.post("/api/products", {
        name,
        price,
        category,
        description,
        image: imageUrl,
      });

      setSuccess(true);
      setName("");
      setPrice("");
      setCategory("shirts");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h2>Add New Product</h2>
      {success && <p style={{ color: "green" }}>Product added!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (€)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="shirts">Signature Shirts</option>
          <option value="dresses">Evening Collection</option>
        </select>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminAddProduct;

