import React from 'react';
import { useCart } from './CartContext';
import { Card, Button } from 'semantic-ui-react';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveClick = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Card.Group>
            {cart.map((item) => (
              <Card key={item.id}>
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Meta>Quantity: {item.quantity}</Card.Meta>
                  <Card.Description>
                    Price: ${item.price} (Total: ${item.price * item.quantity})
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button color="red" onClick={() => handleRemoveClick(item.id)}>
                    Remove
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
          <p>Total: ${calculateTotal()}</p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;



