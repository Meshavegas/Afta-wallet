import React from "react";
import Ball from "../assets/ball.svg";
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
        <p className=" text-justify mt-7 text-xl text-brown">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          repellendus dolorem neque sint nihil, blanditiis harum ea quaerat?
          Accusantiu
        </p>
      </div>
      <div className="md:w-3/12 mt-10 md:mt-0">
        <img src={Ball} alt="ball" className=" w-full" />
      </div>
    </div>
  );
};

export default Conviction;
