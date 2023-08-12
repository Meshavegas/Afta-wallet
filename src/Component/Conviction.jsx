import React from "react";

import videoCashout from "../assets/demo-screen.mp4";
import { TypeAnimation } from "react-type-animation";
const Conviction = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between w-full items-center my-5">
      <div className=" md:w-7/12">
        <h1 className=" text-4xl font-bold">
          <TypeAnimation
            sequence={[
              "Making your money available when you need it the most.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-justify mt-7 text-xl ">
          We have designed a simple wallet that will allow you deposit your
          money in a currency of your choice and also withdraw cash in the
          currency of your choice at low fees and direct exchange rates.
        </p>
      </div>
      <div className=" w-80 h-80  mt-10 md:mt-0 rounded-full overflow-hidden">
        {/* <img src={Ball} alt="ball" className=" w-full" /> */}
        <video
          src={videoCashout}
          muted
          autoPlay
          loop
          className=" w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Conviction;
