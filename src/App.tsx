import React, { useState, useEffect } from 'react';
import ProductSelect from './components/ProductSelect'
import ProductDetails from './components/ProductDetails';
import { useSpring, animated } from 'react-spring';
import { Product } from './types/types';


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const onSelectProduct = (product: Product | null) => {
    setSelectedProduct(product);

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
  // Initial animation states
  const [detailsAnimation, setDetailsAnimation] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(30px)',
  }));

  const [noProductAnimation, setNoProductAnimation] = useSpring(() => ({
    opacity: 1,
    transform: 'scale(0.8)',
  }));

  return (
    <>
      <ProductSelect products={products} onSelect={onSelectProduct} />

      {selectedProduct ? (
        <animated.div key={selectedProduct.id} style={detailsAnimation}>
          <ProductDetails product={selectedProduct} />
        </animated.div>
      ) : (
        <animated.p style={noProductAnimation} className="mt-[200px] text-center text-xl">
          No product selected
        </animated.p>
      )}
    </>
  );
}

export default App;
