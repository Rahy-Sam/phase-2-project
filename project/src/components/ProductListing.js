import React, { useState } from 'react';
import { Card, Button, Rating, Grid } from 'semantic-ui-react';
import ProductModal from './ProductModal';
import { useCart } from './CartContext';

const ProductListing = ({ products }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    addToCart(selectedProduct);
  };

  const handleProductClick = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setSelectedProduct(selectedProduct);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Items</h2>
      <Grid columns={4}>
        {products.map((product) => (
          <Grid.Column key={product.id}>
            <Card raised className="product-card">
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
                <Button fluid color="green" onClick={() => handleBuyClick(product.id)}>
                  Buy
                </Button>
                <Button fluid color="blue" onClick={() => handleProductClick(product.id)}>
                  View Details
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductListing;
