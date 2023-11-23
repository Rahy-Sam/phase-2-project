import React, { useContext } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <Card key={item.id} className="cart-item">
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>
              <span className="price">${item.price}</span>
            </Card.Meta>
            <Card.Description>Quantity: {item.quantity}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default ShoppingCart;
