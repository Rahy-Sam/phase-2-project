import React from 'react';
import { Card, Button, Rating } from 'semantic-ui-react';
const ProductListing = ({ products }) => {
 return (
    <Card.Group itemsPerRow={4}>
      {products.map((product) => (
        <Card key={product.id} raised className="product-card">
          <Card.Content textAlign="center">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>
              <span className="price">${product.price}</span>
            </Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Rating icon="star" defaultRating={product.rating.rate} maxRating={5} />
            <Button fluid color="blue">
              Add to Cart
            </Button>
            <Button fluid color="green">
              Buy Now
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
 );
};

export default ProductListing;