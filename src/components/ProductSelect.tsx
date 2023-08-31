import Select from 'react-select';
import { Product, ProductOption } from '../types/types';  
import customStyles from '../customStyles/customStyles'; 
import { CustomDropdownIndicator } from './CustomDropdownIndicator'; 

interface ProductSelectProps {
  products: Product[];
  onSelect: (product: Product | null) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ products, onSelect }) => {
  const handleSelectProductChange = (selectedOption: ProductOption | null) => {
    if (selectedOption) {
      const product = products.find(p => p.id === selectedOption.value);
      onSelect(product || null);
    }
  };

  return (
    <Select
      styles={customStyles}
      components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: () => null }}
      options={products.map(product => ({ value: product.id, label: product.title }))}
      onChange={(value) => handleSelectProductChange(value as ProductOption | null)}
      placeholder="Select a product"
    />
  );
};

export default ProductSelect;
