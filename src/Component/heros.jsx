import React from "react";
import whatsapp from "../assets/whatsapp-button.png";
import scan from "../assets/scan.png";
import { TypeAnimation } from "react-type-animation";
const Heros = () => {
  return (
    <div className="flex justify-center gap-3 items-center flex-col md:flex-row">
      <div className=" md:w-1/2 flex flex-col gap-6">
        <h1 className=" font-extrabold text-3xl">
          <TypeAnimation
            sequence={[
              "Deposit any currency and amount",
              1000,
              "One wallet for all your local currency ",
              1000,
              "Secure and fast exchange wallet",
              1000,
              "Cashout anywhere easyly",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-white-gray-light md:text-left  text-center text-xl">
          Travel across Africa without having to worry about exchanging from one
          local currency to another. You get to keep more of the value of your
          money in any given local currency.
        </p>
        <div>
          <h1 className=" font-bold text-xl">Just scan or tap on whatsapp</h1>
          <div className=" flex md:flex-row flex-col justify-center gap-5 items-center">
            <a href="https://wa.link/4y31k2" className="w-1/3">
              <img src={whatsapp} alt="" className="w-full" />
            </a>
            <img src={scan} alt="" className=" w-1/3" />
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <img
          src="https://www.mymoneysouq.com/financial-blog/wp-content/uploads/2020/02/1_KJ6YEWE1e1fHvJZc1ZppAw.jpeg"
          alt="w-full"
          className="w-full"
        ></img>
      </div>
    </div>
  );
};

export default Heros;
