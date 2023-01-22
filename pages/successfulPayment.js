import Link from "next/link";
import React, { useEffect } from "react";
import CanvasConfetti from "../components/CanvasConfetti";

const successfulPayment = () => {
    useEffect(()=>{
        CanvasConfetti();
    },[])

  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="w-[60vw] h-max py-8 bg-[#8080803d] flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-2xl text-blue-900">
          Thank You For Your Purchase
        </h1>
        <span className="text-xs text-black">
          Check your email inbox for receipt
        </span>
        <span className="text-black text-xs my-8">
          if you have any questions please email
          <span className="text-[#ff0000] ml-2 text-xs">orders@example.com</span>
        </span>
      <Link href={"/"}>
        <button className="bg-[#ff0000] text-white py-2 px-8 rounded my-2">
          Return to Home page
        </button>
      </Link>
      </div>
    </div>
  );
};

export default successfulPayment;
