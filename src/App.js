import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loader, Button } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ProductModal from './components/ProductModal';
import { CartProvider } from './components/CartContext';
import ShoppingCart from './pages/ShoppingCart';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      setFilteredProducts([...filteredProducts, newProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Error adding product. Please try again.');
    }
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const renderContent = () => {
    console.log('Rendering content...');

    if (loading) {
      return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <Loader active inline="centered" />
        </div>
      );
    } else if (error) {
      return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <p style={{ color: 'red' }}>{error}</p>
          <Button primary onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      );
    } else if (selectedProductId) {
      const selectedProduct = filteredProducts.find((product) => product.id === selectedProductId);
      return <ProductPage product={selectedProduct} />;
    } else {
      return (
        <ProductListing
          products={filteredProducts}
          addProduct={addProduct}
          onProductClick={handleProductClick}
        />
      );
    }
  };

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <Switch>
            <Route path="/" exact component={() => <HomePage products={filteredProducts} />} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/products" exact component={renderContent} />
            <Route path="/cart" exact component={ShoppingCart} />
          </Switch>
          <Footer />
          {selectedProductId && (
            <ProductModal
              product={filteredProducts.find((product) => product.id === selectedProductId)}
              onClose={() => setSelectedProductId(null)}
            />
          )}
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;

