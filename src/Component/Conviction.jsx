import React from "react";

import videoCashout from "../assets/demo-screen.mp4";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
const Conviction = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className=" flex flex-col md:flex-row justify-between w-full items-center my-5">
      <div className=" md:w-7/12">
        <h1 className=" text-4xl font-bold">
          <TypeAnimation
            sequence={[
              t("conviction.text"),
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-justify mt-7 text-xl ">{t("conviction.text2")}</p>
      </div>
      <div className="  mt-10 md:mt-0 rounded-full overflow-hidden">
        {/* <img src={Ball} alt="ball" className=" w-full" /> */}
        <img
          className=""
          src="https://firebasestorage.googleapis.com/v0/b/after-wallet.appspot.com/o/WhatsApp%20Image%202024-01-31%20at%2010.48.33%20PM.jpeg?alt=media&token=d37ac6ee-1ad1-4c55-985d-3977240ade9f"
        />
        {/* <video
          src={videoCashout}
          muted
          autoPlay
          loop
          className=" w-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Conviction;
