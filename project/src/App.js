import React from 'react';
import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';

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
  }, []); 

  return (
    <div className="App">
      <NavBar />
      <ProductListing />
      <Footer />
    </div>
  );
};


export default App;



