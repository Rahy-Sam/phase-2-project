import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ProductModal from './components/ProductModal';
import { CartProvider } from './components/CartContext';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Added filteredProducts state
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Added searchTerm state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update filteredProducts when searchTerm changes
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

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
      setFilteredProducts([...filteredProducts, newProduct]); // Update filteredProducts as well
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Error adding product');
    }
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
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
      return (
        <ProductListing
          products={filteredProducts} // Render filteredProducts instead of all products
          addProduct={addProduct}
          onProductClick={handleProductClick}
        />
      );
    }
  };

  return (
    <div className="App">
      <CartProvider>
        <NavBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        {renderContent()}
        <Footer />
        {selectedProductId && (
          <ProductModal
            product={products.find((product) => product.id === selectedProductId)}
            onClose={() => setSelectedProductId(null)}
          />
        )}
      </CartProvider>
    </div>
  );
};

export default App;
