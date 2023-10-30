import React from "react";
import arrow from "../assets/icons/arrow.svg";
import signin from "../assets/icons/signin.svg";
import widt from "../assets/icons/2widt.svg";
import withdraw from "../assets/icons/withdraw.svg";

export const StepApp = () => {
  return (
    <div className="flex justify-between   w-full md:mx-[100px] md:px-40 md:py-20 text-orange flex-col md:flex-row">
      <div className=" flex justify-between items-center flex-col">
        <img src={signin} alt="" className=" w-48" />
        <div className=" text-[3em]">Sign In</div>
      </div>
      <div className="flex justify-between items-center invisible md:visible">
        <img src={arrow} alt="" className="w-48" />
      </div>
      <div className=" flex justify-between items-center flex-col">
        <img src={widt} alt="" className=" w-48" />
        <div className="text-[3em]">Deposit</div>
      </div>
      <div className="flex justify-between items-center invisible md:visible">
        <img src={arrow} alt="" className="w-48" />
      </div>
      <div className=" flex justify-between items-center flex-col">
        <img src={withdraw} alt="" className=" w-48" />
        <div className=" text-[3em]">Cash Out</div>
      </div>
    </div>
  );
};
