import Link from "next/link";
import React, { useState } from "react";

const arrayOfPremiumProducts = [
  { name: "Pink Sun Glasses", price: 319.5, imagePath: "1.jpg" },
  { name: "Black Nighty", price: 350, imagePath: "2.jpg" },
  { name: "Yellow Shoulder Bag", price: 450, imagePath: "3.jpg" },
  { name: "Yellow Sun Glasses", price: 319.5, imagePath: "4.jpg" },
  { name: "Black Shoulder Bag", price: 450, imagePath: "5.jpg" },
];

const PremiumProducts = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="w-full h-[150vh] flex items-center justify-start flex-col overflow-x-clip relative">
      <h1 className=" text-5xl text-white text-center mt-8 mb-3">
        Premium Products
      </h1>
      <span className=" text-gray-600 text-center  my-1">We Recommend</span>
      <div className="flex flex-col justify-center items-center my-5 w-[100vw] relative overflow-x-clip h-[100vh]">
        <div className="overflow-x-scroll w-[90vw] overflow-y-hidden  scrollbar-thumb-pink-800 scrollbar-thin scrollbar-track-gray-100 flex items-center gap-4 scroll-smooth absolute inset-0 mx-auto">
        {arrayOfPremiumProducts.map((item, index) => (
            <div className="flex flex-col h-[540px] min-w-[25rem] mb-20" onClick={() => setSelected(index)}  key={index}>
              <img
                src={`/img/intro/${item.imagePath}`}
                className={`w-[25rem] ${
                  selected === index
                    ? "h-[475px] border-[6px] border-gray-600"
                    : "h-[460px]"
                }`}
              />
              <div className="text-center text-4xl text-white ">
                {item.name}
              </div>
              <div className="text-center text-3xl text-gray-600 ">
                ${item.price}
              </div>
                {selected===index && <button className="border-2 w-max self-center my-5 border-gray-500 py-2 px-4 bg-white text-black">
                    Add to Cart
                </button>}
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default PremiumProducts;
