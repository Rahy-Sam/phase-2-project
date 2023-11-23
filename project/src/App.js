import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ProductModal from './components/ProductModal';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Error adding product');
    }
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else if (selectedProductId) {
      const selectedProduct = products.find((product) => product.id === selectedProductId);
      return <ProductPage product={selectedProduct} />;
    } else {
      return <ProductListing products={products} addProduct={addProduct} onProductClick={handleProductClick} />;
    }
  };

  return (
  <div className="App">
    <NavBar />
    {renderContent()}
    <Footer />
    {selectedProductId && <ProductModal product={products.find((product) => product.id === selectedProductId)} onClose={() => setSelectedProductId(null)} />}
  </div>
);
};

export default App;
