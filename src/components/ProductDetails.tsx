import React from 'react';
import { Product } from '../types/types';  

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-2 mt-[156px] max-w-xl gap-4">
      <div className="flex flex-col justify-center items-end">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="border-1 border-[#1AA2B0] rounded-lg h-36"
        />
      </div>

      <div className="bg-[#151420]">
        <div className="flex justify-between items-center">
          <p className="text-white text-xl font-bold">{product.title}</p>
          <span className="text-white font-bold text-xs bg-[#1AA2B0] rounded-full px-2 py-1">
            {product.category}
          </span>
        </div>
        <p className="text-left leading-10 text-sm">{product.brand}</p>
        <p className="text-left text-white text-3xl font-bold">${product.price}.00</p>
        <p className="text-left text-white leading-10 text-sm">{product.description}</p>
      </div>
    </div>
  );
}


export default ProductDetails;
