import React from "react";
import Logo from "../assets/logo-trans.png";

const Description = () => {
  return (
    <div className=" text-white flex flex-col justify-center items-center w-full gap-3 sm:w-2/3">
      <div className=" text-3xl md:text-5xl text-center font-bold">
        "You can now load your CFA, Naira or Cedi into your wallet and cashout
        the Rand in South Africa or the Shilling in Kenya."
      </div>
      <div className=" text-4xl mt-6 font-extrabold">
        <img src={Logo} alt="" className=" h-40" />
      </div>
    </div>
  );
};

export default Description;
