import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-2 mt-[156px]">
      <div>
        <img
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="iPhone 9"
          className="border-1 border-[#1AA2B0] rounded-lg h-36"
        />
      </div>

      <div className="bg-[#151420]">
        <div className="flex justify-between items-center">
          <p className="text-white text-xl font-bold">iPhone 9</p>
          <span className="text-white font-bold text-xs bg-[#1AA2B0] rounded-full px-2 py-1">
            smartphones
          </span>
        </div>
        <p className="text-left leading-10 text-sm">Apple</p>
        <p className="text-left text-white text-3xl font-bold">$549.00</p>
        <p className="text-left text-white leading-10 text-sm">An apple mobile which is nothing like apple</p>
      </div>
    </div>
  );
}


export default ProductDetails;
