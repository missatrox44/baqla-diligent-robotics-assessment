import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error fetching products:", error));
    console.log("products:", products)
  }, []);

  return (
    <>
      <select className="w-[600px] h-[60px] border border-[#1AA2B0] rounded-[6px] px-3 mt-[285px]">
        <option value="">Select a product</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
      </select>
      <p className="mt-[200px]">No product selected</p>
    </>
  );
}

export default App;
