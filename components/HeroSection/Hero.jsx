import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden h-[90vh] bg-gradient-to-r from-purple-500 to-pink-400 flex justify-center items-center gap-12">
        <div className="left relative h-[33rem] w-[35rem] self-end -bottom-[96px]">
            <Image src="/img/slider-img.png" layout="fill" objectFit="contain"/>
        </div>
        <div className="flex flex-col max-w-[28rem] items-start justify-center gap-3 ">
            <span className="text-white">FROM $19.89</span>
            <h1 className=" text-6xl text-gray-600 m-0 overflow-y-hidden">2022</h1>
            <p className="text-7xl text-white my-0 overflow-y-hidden">SUMMER COLLECTION</p>
            <button className="bg-gray-800 text-white py-3 px-4 border-none">Shop NOW</button>
        </div>
    </div>
  );
};

export default Hero;
