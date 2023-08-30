import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';

type Product = {
  id: string;
  title: string;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error fetching products:", error));
    // console.log("products:", products)
  }, []);

  return (
    <>
      <select className="w-[600px] h-[60px] border border-[#1AA2B0] rounded-[6px] px-3 mt-[285px]">
        <option value="">Select a product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.title}</option>
        ))}
      </select>
      <p className="mt-[200px]">No product selected</p>
      <ProductDetails/>
    </>
  );
}

export default App;
