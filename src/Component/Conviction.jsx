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
          src="https://firebasestorage.googleapis.com/v0/b/after-wallet.appspot.com/o/logo-crop.jpg?alt=media&token=a24827b8-9d48-456d-af38-bad86663412b&_gl=1*xm9055*_ga*MjAyMzk5NjAyMS4xNjkxMTM5NDQ5*_ga_CW55HF8NVT*MTY5NTkwNzQ1Ni4zOC4xLjE2OTU5MTEyNDIuNDguMC4w"
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
