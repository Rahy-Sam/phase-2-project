import React from 'react';
import { Card, Rating, Grid } from 'semantic-ui-react';
import ProductModal from './ProductModal';


const productListStyle = {
  padding: '20px', 
};

const ProductListing = ({ products, onProductClick }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={productListStyle}>
      <h2 style={{ color: '#4285f4' }}>Our Products</h2>
      <Grid columns={4}>
        {products.map((product) => (
          <Grid.Column key={product.id} style={{ height: '400px' }}> 
            <div style={{ height: '100%' }}> 
              <Card raised className="product-card" onClick={() => handleProductClick(product.id)}>
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
                  <Card.Description style={{ display: 'none' }}>{product.description}</Card.Description>
                </Card.Content>
                <Card.Content extra textAlign="center">
                  <Rating icon="star" defaultRating={product.rating.rate} maxRating={5} />
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        ))}
      </Grid>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductListing;
