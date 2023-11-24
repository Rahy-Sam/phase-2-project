import React from 'react';
import ProductListing from '../components/ProductListing';

const HomePage = ({ products }) => {
  return (
    <div style={homePageContainerStyle}>
      <div style={homePageContentStyle}>
        <h2>Welcome to Soko Safi App!</h2>
        <p>Explore our products, rate your experience, and reach out to us for any questions or contributions.</p>
        <ProductListing products={products} />
      </div>
    </div>
  );
};

const homePageContainerStyle = {
  minHeight: 'calc(100vh - 80px)', 
};

const homePageContentStyle = {
  textAlign: 'center',
  padding: '20px',
};

export default HomePage;


