import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useContext } from "react";
import CartContext from "../components/StoreContext";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const checkout = () => {
  const [loading, setLoading] = useState(false);
  const cartCtx = useContext(CartContext);

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout_session", {
      items: cartCtx.allItems,
    });
    setLoading(false);
    stripe.redirectToCheckout({sessionId: checkoutSession.data.id})
  };

  return (
    <div className="h-full w-screen flex justify-around items-center bg-white py-[5rem]">
      <div
        className={
          "billingAddress flex flex-col items-start justify-between max-w-sm gap-8"
        }
      >
        <h1 className={"text-black text-2xl"}>Billing Address</h1>
        <form
          className={
            "w-full h-max flex flex-col items-start justify-between gap-4"
          }
        >
          <div className="flex w-full items-center justify-between">
            <input
              className={"py-3 px-4 bg-[#EBEBEB] outline-none text-gray-700"}
              placeholder={"First Name*"}
            />
            <input
              className={
                "py-3 px-4 bg-[#EBEBEB] ml-4 outline-none text-gray-700"
              }
              placeholder={"Last Name*"}
            />
          </div>
          <input
            className={"py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none"}
            placeholder={"Company"}
          />
          <select className="py-3 px-4 bg-[#EBEBEB] text-gray-500 w-[27.6rem]">
            <option id="country" value={"country"}>
              Country*
            </option>
            <option id="USA" value={"USA"}>
              USA
            </option>
            <option id="UK" value={"UK"}>
              UK
            </option>
            <option id="Pakistan" value={"Pakistan"}>
              Pakistan
            </option>
          </select>
          <input
            className="py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none text-gray-700"
            placeholder="Address"
          />
          <input className="py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none text-gray-700" />

          <input
            className="py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none text-gray-700"
            placeholder="Zip Code"
          />
          <input
            className="py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none text-gray-700"
            placeholder="Phone Number*"
          />
          <input
            className="py-3 px-4 bg-[#EBEBEB] w-[27.6rem] outline-none text-gray-700"
            placeholder="Email Address"
          />
        </form>
      </div>
      <div className="flex flex-col items-center justify-center max-w-sm text-black">
        <div className="flex flex-col justify-center items-center gap-8 max-w-[24rem] border-4 bg-[#ebebeb] h-[19rem] border-gray-700">
            <h1 className="text-[#383535] font-bold py-4 px-4 text-4xl">Pay with Stripe, one of the most secured payment system</h1>
            <button
            onClick={createCheckOutSession}
            className="bg-blue-500 hover:bg-blue-600 text-white block py-2 px-4 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100"
            >
            {loading ? "Processing..." : "Contine to pay with Stripe"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default checkout;
