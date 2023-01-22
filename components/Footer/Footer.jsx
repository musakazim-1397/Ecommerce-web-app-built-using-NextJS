import React from "react";

const Footer = () => {
  return (
    <div className="h-[83vh] w-screen flex justify-center items-center gap-8 bg-[#363535]">
      <div className="flex flex-col max-w-xs items-start justify-between gap-8">
        <img src={"/img/logo.png"} className="h-[2rem] w-[9rem]" />
        <p className=" text-gray-500">
          Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis.
          Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac
          sem.
        </p>
        <div className="flex justify-between items-center">
            <img src="/img/cards/1.png"/>
            <img src="/img/cards/2.png"/>
            <img src="/img/cards/3.png"/>
            <img src="/img/cards/4.png"/>
            <img src="/img/cards/5.png"/>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between items-start">
            <div className="flex flex-col justify-between items-start gap-4">
                <h1 className="text-white">USEFULL LINKS</h1>
                <div className="flex flex-col justify-between items-start gap-2 text-gray-500">
                    <span>Partners</span>
                    <span>Bloggers</span>
                    <span>Support</span>
                    <span>Terms of Use</span>
                    <span>Press</span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-4">
                <h1 className="text-white">SITEMAP</h1>
                <div className="flex flex-col justify-between items-start gap-2 text-gray-500">
                    <span>Partners</span>
                    <span>Bloggers</span>
                    <span>Support</span>
                    <span>Terms of Use</span>
                    <span>Press</span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-4">
                <h1 className="text-white">SHIPPING &amp; RETURNS</h1>
                <div className="flex flex-col justify-between items-start gap-2 text-gray-500">
                    <span>About Us</span>
                    <span>Track Orders</span>
                    <span>Returns</span>
                    <span>Jobs</span>
                    <span>Shipping</span>
                    <span>Blog</span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-4 ml-4">
                <h1 className="text-white">CONTACT</h1>
                <div className="flex flex-col justify-between items-start gap-2 text-gray-500">
                    <span>Your Company Ltd</span>
                    <span>1481 Creekside Lane</span>
                    <span>Avila Beach, CA 93424,</span>
                    <span>+53 345 7953 32453</span>
                    <span>office@youremail.com</span>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
