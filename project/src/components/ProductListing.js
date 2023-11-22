import React from 'react';
import { Card, Button, Rating } from 'semantic-ui-react';

const ProductListing = ({ products, buyNow }) => {
  return (
    <Card.Group itemsPerRow={4}>
      {products.map((product) => (
        <Card key={product.id} raised className="product-card">
              <Card.Content textAlign="center">
                  <Card>
                      <img
                       src={product.image}
                       alt={product.title}
                       className="product-image"
                        style={{
                              width: '100px',
                              height:'100px'
                       }}   
                    />
                  </Card>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>
              <span className="price">${product.price}</span>
            </Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Rating icon="star" defaultRating={product.rating.rate} maxRating={5} />
            <Button fluid color="green" onClick={() => buyNow(product)}>
              Buy Now
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ProductListing;
