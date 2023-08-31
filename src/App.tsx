import React, { useState, useEffect } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';
import { useSpring, animated } from 'react-spring';
import Select, { components, DropdownIndicatorProps } from 'react-select';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  description: string;
}

interface ProductOption {
  value: number;
  label: string;
}

interface OptionState {
  isSelected: boolean;
  isFocused: boolean;
}

const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div style={{ borderTop: '8px solid #1AA2B0', borderLeft: '8px solid transparent', borderRight: '8px solid transparent', height: 0, width: '16px' }}></div>
      </components.DropdownIndicator>
    )
  );
};

const customStyles = {
  control: (base: object) => ({
    ...base,
    backgroundColor: '#1E1D2D',
    borderColor: '#1AA2B0',
    borderRadius: '6px',
    height: '60px',
    padding: '5px',
    color: '#1AA2B0',
    width: '600px'
  }),
  option: (base: object, state: OptionState) => ({
    ...base,
    backgroundColor: state.isSelected || state.isFocused ? '#1AA2B0' : '#1E1D2D',
    color: state.isSelected || state.isFocused ? '#1E1D2D' : '#1AA2B0',
    fontWeight: 'bold',
    lineHeight: '30px',
  }),
  singleValue: (base: object) => ({
    ...base,
    color: '#1AA2B0',
  }),
  menu: (base: object) => ({
    ...base,
    borderColor: '#1AA2B0',
    borderRadius: '6px',
    borderWidth: '1px',
    boxShadow: 'none',
    marginTop: '5px',
  }),
  menuList: (base: object) => ({
    ...base,
    overflowY: 'auto' as const,
    padding: 0,
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  }),
};


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

  const handleSelectProductChange = (selectedOption: ProductOption | null) => {
    if (selectedOption) {
      const product = products.find(p => p.id === selectedOption.value);
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
    }
  };


  return (
    <>
      <Select
        styles={customStyles}
        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: () => null }}
        options={products.map(product => ({ value: product.id, label: product.title }))}
        onChange={(value) => handleSelectProductChange(value as ProductOption | null)}
        placeholder="Select a product"
      />

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
