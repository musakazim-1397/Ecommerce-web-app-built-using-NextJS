import Link from "next/link";
import React from "react";
import { useContext, useState } from "react";
import CartContext from "../components/StoreContext";

const checkout = () => {
  const cartCtx = useContext(CartContext);
  const [shippingMethod, setShippingMethod] = useState();
  let tPrice;
  cartCtx.allItems.forEach((i) => i.totalPricePerItem + tPrice);
  return (
    <div className="w-screen h-max flex flex-col bg-white items-center pb-[3rem]">
      <div className="nav flex justify-between items-center bg-[#ebebeb] px-4 w-[80vw] h-[3rem] my-[2rem] text-black">
        <div className="prod">Products</div>
        <div className="priceqtysection flex justify-between items-center gap-[7rem] ">
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
      </div>
      <div className="w-[80vw] h-max py-[4rem] flex flex-col gap-[4.5rem]">
        {cartCtx.allItems.map((item) => (
          <div className="w-full h-[10rem] flex justify-between items-center px-4">
            <div className="itemImgName flex justify-start items-center">
              <img
                src={`img/products/${item.imgUrl}`}
                className="h-full w-[10rem]"
              />
              <span className="text-black ml-4">{item.name}</span>
            </div>
            <div className="priceqtysection flex justify-between items-center gap-[7rem] text-gray-800">
              <span>${item.price}</span>
              <span>{item.quantity}</span>
              <span>${item.totalPricePerItem}</span>
            </div>
          </div>
        ))}
        <div className=" text-black text-end font-bold text-2xl">
          Total of Products: {cartCtx.totalPrice}
        </div>
        <div className="clearCartBtn my-[2rem] flex justify-between items-center">
          <button
            className="py-[0.5rem] px-4 bg-[#B09D81] "
            onClick={() => cartCtx.clearCart()}
          >
            Clear Cart
          </button>
          <Link href={"/"}>
            <button className="py-[0.5rem] px-4 bg-transparent border-2 border-gray-800 text-black">
              Continue Shopping
            </button>
          </Link>
        </div>
        <div className="shippingSection w-[80vw] h-max py-[2rem] flex justify-around items-center bg-[#EBEBEB]">
          <div className="leftSide flex flex-col justify-between items-start gap-8 w-[25rem]">
            <div>
              <h1 className="text-black text-2xl">Shipping method</h1>
              <span className="text-gray-600">Select the one you want</span>
            </div>
            <div
              onChange={(e) => setShippingMethod(e.target.value)}
              className="flex flex-col justify-between items-start text-black gap-4 w-full"
            >
              <div className="flex justify-between items-center w-full">
                <div>
                <input
                  className=" accent-red-600"
                  type={"radio"}
                  id="Next_day_delivery"
                  name="Next_day_delivery"
                  value={4.99}
                />
                <label htmlFor="Next_day_delivery" className="ml-[1rem]">Next day delivery</label>
                </div>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                <input
                  className="accent-red-600"
                  type={"radio"}
                  id="Standard_delivery"
                  name="Standard_delivery"
                  value={1.99}
                />
                <label htmlFor="Standard_delivery" className="ml-[1rem]">Standard delivery</label>
                </div>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                <input
                  className="accent-red-600"
                  type={"radio"}
                  id="Personal_Pickup"
                  name="Personal_Pickup"
                  value={0}
                />
                <label htmlFor="Personal_Pickup" className="ml-[1rem]">Personal Pickup</label>
                </div>
                <span>Free</span>
              </div>
            </div>
            <div className="cuponCode flex flex-col justify-between items-start text-black gap-4">
              <h1 className="text-2xl">Cupon code</h1>
              <span>Enter your cupone code</span>
              <div className="flex justfy-center items-center">
                <input type={"text"} className="py-3 px-4 w-[10rem] bg-white"></input>
                <button className="py-3 px-[2rem] font-bold bg-[#B09D81]">Apply</button>
              </div>
            </div>
          </div>
          <div className="rightSide flex flex-col justify-between items-start w-[25rem]">
            <div className="flex flex-col text-black">
              <h1 className="text-2xl">Cart Total</h1>
              <span>Final Info</span>
            </div>
            <div className="w-full h-[17rem] flex flex-col justify-between items-center bg-white text-black">
              <div className="flex justify-between items-center w-full px-[2rem] pt-[2rem]">
                <h1>Subtotal</h1>
                <span>{cartCtx.totalPrice}</span>
              </div>
              <div className="flex justify-between items-center w-full px-[2rem]">
                <h1>Shipping</h1>
                <span>${shippingMethod}</span>
              </div>
              <div className="flex justify-between items-center bg-[#F7F7F7] w-full px-[2rem] py-[0.7rem]">
                <h1>Total</h1>
                <span>${shippingMethod && (+shippingMethod+cartCtx.totalPrice).toFixed(2)}</span>
              </div>
              <Link href={"/checkout"}>
                <button className="w-full bg-[#B09D81] py-[1rem]">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;
