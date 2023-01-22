import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsEye, BsSuitHeart } from "react-icons/bs";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import CartContext from "../StoreContext";
import { useContext } from "react";

const allItems = [
  {
    name: "Casual Coat",
    price: 39.9,
    new: false,
    recommended: true,
    bestSeller: true,
    imgUrl: "1.jpg",
    ind: 0,
    id:'item1'
  },
  {
    name: "Blue Sweater",
    price: 19.99,
    new: true,
    recommended: true,
    bestSeller: false,
    imgUrl: "2.jpg",
    ind: 1,
    id:'item2'
  },
  {
    name: "Basket",
    price: 49.9,
    new: false,
    recommended: true,
    bestSeller: true,
    imgUrl: "3.jpg",
    ind: 2,
    id:'item3'
  },
  {
    name: "Denim Shirt",
    price: 6.9,
    new: true,
    recommended: true,
    bestSeller: true,
    sale: true,
    imgUrl: "4.jpg",
    ind: 3,
    id:'item4'
  },
  {
    name: "Full Sleves Shirt",
    price: 29.9,
    new: false,
    recommended: true,
    bestSeller: true,
    imgUrl: "5.jpg",
    ind: 4,
    id:'item5'
  },
  {
    name: "HYPE GREY SHIRT",
    price: 19.9,
    new: true,
    recommended: true,
    bestSeller: false,
    imgUrl: "6.jpg",
    ind: 5,
    id:'item6'
  },
  {
    name: "Yellow Frok",
    price: 29.9,
    new: false,
    recommended: true,
    bestSeller: false,
    imgUrl: "7.jpg",
    ind: 6,
    id:'item7'
  },
  {
    name: "Frok",
    price: 29.9,
    new: false,
    recommended: true,
    bestSeller: false,
    imgUrl: "8.jpg",
    ind: 7,
    id:'item8'
  },
];

const NewArrival = () => {
  const [selectedCategory, setSelectedCategory] = useState("recommended");
  const [selectedItemsArray, setSelectedItemsArray] = useState();
  const [isHovered, setIsHovered] = useState();
  const cartCtx= useContext(CartContext);

const addToCartHandler=(item)=>{
  cartCtx.addItemToCart({...item});
}

  useEffect(() => {
    if (selectedCategory === "recommended") {
      let newArray = allItems.filter((item) => item.recommended);
      setSelectedItemsArray(newArray);
    }
    if (selectedCategory === "new") {
      let newArray = allItems.filter((item) => item.new);
      setSelectedItemsArray(newArray);
    }
    if (selectedCategory === "best") {
      let newArray = allItems.filter((item) => item.bestSeller);
      return setSelectedItemsArray(newArray);
    }
  }, [selectedCategory]);

  return (
    <div className="h-full w-screen flex flex-col justify-center items-center gap-[3rem] bg-white">
      <div className="flex jusstify-center items-center gap-8 mt-8">
        <div
          onClick={() => setSelectedCategory("new")}
          className="text-black cursor-pointer text-[2rem]"
        >
          New Arrivals
        </div>
        <span className="text-black">/</span>
        <div
          onClick={() => setSelectedCategory("recommended")}
          className="text-black cursor-pointer text-[2rem]"
        >
          Recommended
        </div>
        <span className="text-black">/</span>
        <div
          onClick={() => setSelectedCategory("best")}
          className="text-black cursor-pointer text-[2rem]"
        >
          Best Seller
        </div>
      </div>
      <div className="w-[85vw] h-full flex flex-wrap gap-4">
        {selectedItemsArray &&
          selectedItemsArray.map((item, index) => (
              <div
              key={index}
                className="w-[22rem] h-[36rem] flex flex-col justify-center items-center"
                onMouseOver={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative w-full h-[27rem] z-[8]">
                  <img
                    src={`/img/products/${item.imgUrl}`}
                    className="w-full h-[27rem]"
                  />
                  <AnimatePresence exitBeforeEnter>
                  {isHovered === item.ind && (
                    <div className="w-full h-full absolute inset-0  flex items-end">
                        <motion.div
                          initial={{ y: "30px", opacity: 0 }}
                          animate={{ y: "0px", opacity: 1 }}
                          transition={{ ease: "easeOut", duration: 0.5 }}
                          exit={{y:'30px', opacity:0}}
                          className="flex justify-around items-center bg-gray-600 w-full h-[5rem] z-10"
                        >
                          <BsEye color="black" size={25} />
                          <BsSuitHeart color="black" size={25} />
                        </motion.div>
                    </div>
                  )}
                  </AnimatePresence>
                </div>
                <span className="uppercase text-base text-black">
                  {item.name}
                </span>
                <span className="font-bold text-4xl text-black">
                  ${item.price}
                </span>
                <button type="button" onClick={addToCartHandler.bind(null, item)} className="bg-white border-gray-600 border-2 py-2 px-3 text-black my-4">
                  Add To Cart
                </button>
              </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
