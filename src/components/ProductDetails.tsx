import React from 'react';

const ProductDetails: React.FC = () => {
  return (

    <div className="grid grid-cols-2">
      <div className="">
        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="iPhone 9" />
      </div>

      <div className="bg-[#151420]">
        <div className="flex justify-between">
          <p className="text-white text-18px font-bold">iPhone9</p>
          <p className="text-white font-bold ">smartphones</p>
        </div>
        <p className="text-left">Apple</p>
        <p className="text-left text-white font-bold">$549.00</p>
        <p className="text-left text-white">An apple mobile which is nothing like apple</p>
      </div>
    </div>
  );
}

export default ProductDetails;
