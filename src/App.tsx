import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';
import { useSpring, animated } from 'react-spring';


interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  description: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        // console.log("API Response:", data);
        setProducts(data.products)
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Initial animation states
  const [detailsAnimation, setDetailsAnimation] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(30px)',
  }));

  const [noProductAnimation, setNoProductAnimation] = useSpring(() => ({
    opacity: 1,
    transform: 'scale(0.8)',
  }));


  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    const product = products.find(p => p.id === value);
    setSelectedProduct(product || null);

    if (product) {
      // animate Product Details card
      setDetailsAnimation({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(30px)' },
      });
    } else {
      // add movement to "no product selected" text
      setNoProductAnimation({
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 0, transform: 'scale(0.8)' },
      });
    }
  };

  return (
    <>
      <select
        style={{ backgroundColor: "#1E1D2D" }}
        className="w-[600px] h-[60px] border border-[#1AA2B0] rounded-[6px] px-3"
        onChange={handleProductChange}
      >
        <option value="">Select a product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.title}</option>
        ))}
      </select>

      {selectedProduct ? (
        <animated.div key={selectedProduct.id} style={detailsAnimation}>
          <ProductDetails product={selectedProduct} />
        </animated.div>
      ) : (
        <animated.p style={noProductAnimation} className="mt-[200px] text-center">
          No product selected
        </animated.p>
      )}
    </>
  );
}

export default App;
