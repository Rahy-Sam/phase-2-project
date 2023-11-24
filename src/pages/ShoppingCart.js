import React from 'react';
import { useCart } from '../components/CartContext';
import { Card, Button, Header, Icon } from 'semantic-ui-react';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveClick = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return total + itemTotal;
    }, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Header as="h2">Shopping Cart</Header>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Card.Group>
            {cart.map((item) => (
              <Card key={item.id} fluid>
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Meta>Quantity: {item.quantity}</Card.Meta>
                  <Card.Description>
                    Price: ${item.price} (Total: ${item.price * (item.quantity || 1)})
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button color="red" onClick={() => handleRemoveClick(item.id)}>
                    <Icon name="trash alternate outline" />
                    Remove
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
          <Header as="h4" style={{ marginTop: '20px' }}>
            Total: ${calculateTotal().toFixed(2)}
          </Header>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
