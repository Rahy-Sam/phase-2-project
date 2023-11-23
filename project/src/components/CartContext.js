import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
