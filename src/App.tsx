import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';


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

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    const product = products.find(p => p.id === value);
    // console.log("Selected Product:", product);
    setSelectedProduct(product || null);
  };


  return (
    <>
      <select
        style={{ backgroundColor: "#1E1D2D" }}
        className="w-[600px] h-[60px] border border-[#1AA2B0] rounded-[6px] px-3 mt-[285px]"
        onChange={handleProductChange}
      >
        <option value="">Select a product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.title}</option>
        ))}
      </select>

      {selectedProduct ? <ProductDetails product={selectedProduct} /> : <p className="mt-[200px] text-center">No product selected</p>}

    </>
  );
}

export default App;
