import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';

type Product = {
  id: string;
  title: string;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error fetching products:", error));
      // console.log("products:", products)
  }, []);

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedProduct(value ? value : null); 
  };

  return (
    <>
      <select
        className="w-[600px] h-[60px] border border-[#1AA2B0] rounded-[6px] px-3 mt-[285px]"
        onChange={handleProductChange}
      >
        <option value="">Select a product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.title}</option>
        ))}
      </select>

      {selectedProduct ? <ProductDetails /> : <p className="mt-[200px]">No product selected</p>}
    </>
  );
}

export default App;
