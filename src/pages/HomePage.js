import React from 'react';
import ProductListing from '../components/ProductListing';

const HomePage = ({ products }) => {
  return (
    <div style={homePageStyle}>
      <h2>Welcome to our Sales App!</h2>
      <p>Explore our products, rate your experience, and reach out to us for any questions or contributions.</p>
      <ProductListing products={products} />
    </div>
  );
};

const homePageStyle = {
  textAlign: 'center',
  padding: '20px',
};

export default HomePage;

