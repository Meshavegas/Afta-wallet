import React from "react";
import Logo from "../assets/logo-trans.png";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className=" text-white flex flex-col justify-center items-center w-full gap-3 sm:w-2/3">
      <div className=" text-3xl md:text-5xl text-center font-bold">
        {t("description.text1")}
      </div>
      <div className=" text-4xl mt-6 font-extrabold">
        <img src={Logo} alt="" className=" h-40" />
      </div>
    </div>
  );
};

export default Description;
