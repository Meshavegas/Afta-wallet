import React from "react";
import { useTranslation } from "react-i18next";

const Visit = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="" id="download">
      <div className="flex justify-center items-center">
        <div className=" ">
          <h1 className="  text-5xl text-white font-bold ">
            {t("visit.text1")}
          </h1>
          <h1 className="  text-5xl text-white font-bold ">
            {t("visit.text2")}
          </h1>
          <div className="border text-white w-fit px-4 text-xl mt-5 rounded-3xl py-2 capitalize hover:text-white-gray hover:bg-white cursor-pointer">
            {t("visit.btnText")}
          </div>
        </div>
        <div className="  w-[60%]">
          <img
            className=""
            src="https://firebasestorage.googleapis.com/v0/b/after-wallet.appspot.com/o/logo-crop.jpg?alt=media&token=a24827b8-9d48-456d-af38-bad86663412b&_gl=1*xm9055*_ga*MjAyMzk5NjAyMS4xNjkxMTM5NDQ5*_ga_CW55HF8NVT*MTY5NTkwNzQ1Ni4zOC4xLjE2OTU5MTEyNDIuNDguMC4w"
          />
        </div>
      </div>
    </div>
  );
};

export default Visit;
