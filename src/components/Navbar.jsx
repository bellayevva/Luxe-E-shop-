import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">LUXE</span>
        <Link to="/">Home</Link>

        <div className="dropdown">
          <span className="dropbtn">Shop ▾</span>
          <div className="dropdown-content">
            <Link to="/category/shirts">Signature Shirts</Link>
            <Link to="/category/dresses">Evening Collection</Link>
          </div>
        </div>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <Link to="/admin/add-product" className="admin-link">+ Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;


