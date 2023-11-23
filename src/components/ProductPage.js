import React from 'react';

const ProductPage = ({ product }) => {
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};

export default ProductPage;

