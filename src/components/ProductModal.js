import React, { useState } from 'react';
import { Modal, Image, Button } from 'semantic-ui-react';
import { useCart } from './CartContext';

const ProductModal = ({ product, onClose, onBuy }) => {
  const [isBought, setIsBought] = useState(false);
  const { addToCart } = useCart();

  const handleBuyClick = () => {
    fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isBought: true }),
    })
      .then((response) => response.json())
      .then(() => {
        // Updating the local state to show the congratulatory message
        setIsBought(true);
        // Adding the product to the cart (assuming you have a CartContext)
        addToCart(product);
      })
      .catch((error) => console.error('Error buying product:', error));
  };

  return (
    <Modal open onClose={onClose}>
      <Modal.Header>{product.title}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={product.image} alt={product.title} />
        <Modal.Description>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {isBought ? (
          <p>Congratulations! You have bought {product.title}</p>
        ) : (
          <Button primary onClick={handleBuyClick}>
            Buy
          </Button>
        )}
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProductModal;
