import React, { useState } from 'react';
import { Card, Button, Rating } from 'semantic-ui-react';
import ProductModal from './ProductModal';

const ProductListing = ({ products, addProduct, onProductClick }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <Card.Group itemsPerRow={4}>
        {products.map((product) => (
          <Card key={product.id} raised className="product-card">
            <Card.Content textAlign="center">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                style={{
                  width: '100px',
                  height: '100px',
                }}
              />
              <Card.Header>{product.title}</Card.Header>
              <Card.Meta>
                <span className="price">${product.price}</span>
              </Card.Meta>
              <Card.Description>{product.description}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <Rating icon="star" defaultRating={product.rating.rate} maxRating={5} />
              <Button fluid color="green" onClick={() => handleProductClick(product.id)}>
                View Details
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>      
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductListing;