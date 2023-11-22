


import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductListing'; // Assuming your component is named ProductList
import Footer from './/components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <div>
      <NavBar />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};


export default App;
