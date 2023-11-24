import React from 'react';
import { Modal, Image, Button, Rating } from 'semantic-ui-react';
import { useCart } from './CartContext';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleBuyClick = () => {
    addToCart(product);
    onClose(); 
  };

  const handleAddToCartClick = () => {
    addToCart(product);
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
          <Rating icon="star" defaultRating={product.rating.rate} maxRating={5} disabled />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleAddToCartClick}>
          Add to Cart
        </Button>
        <Button positive onClick={handleBuyClick}>
          Buy Now
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProductModal;
