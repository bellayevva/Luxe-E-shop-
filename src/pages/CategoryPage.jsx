import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();

  const titles = {
    shirts: 'Signature Shirts',
    dresses: 'Evening Collection',
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{titles[categoryName]}</h2>
      <p style={{ color: "#777", marginTop: 10 }}>
        Products will be loaded from the database here soon.
      </p>
    </div>
  );
}

export default CategoryPage;

