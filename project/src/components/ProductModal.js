import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      {/* Your modal content, styling, and close button */}
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
};

export default ProductModal;
