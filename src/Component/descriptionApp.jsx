import React from "react";
import whatsapp from "../assets/whatsapp-button.png";

const DescriptionApp = () => {
  return (
    <div className=" text-white flex flex-col justify-center items-center w-full gap-3 md:w-2/3">
      <div className=" text-xl text-center font-bold">
        We are not an App, but a chatbot so just click the whatsapp
      </div>
      <div className=" text-4xl mt-6 font-extrabold  flex items-center justify-center">
        <a href="https://wa.link/4y31k2" className=" w-2/5">
          <img src={whatsapp} alt="" className="w-full" />
        </a>
      </div>
    </div>
  );
};

export default DescriptionApp;
