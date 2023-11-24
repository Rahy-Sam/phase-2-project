import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveClick = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default ShoppingCart;



