import React from 'react';
import { Modal, Image, Button } from 'semantic-ui-react';

const ProductModal = ({ product, onClose }) => {
  return (
    <Modal open onClose={onClose}>
      <Modal.Header>{product.title}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={product.image} alt={product.title} />
        <Modal.Description>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProductModal;
