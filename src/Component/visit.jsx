import React from "react";
import { useTranslation } from "react-i18next";

const Visit = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="  my-28" id="download">
      <h1 className="  text-5xl text-white font-bold ">{t("visit.text1")}</h1>
      <h1 className="  text-5xl text-white font-bold ">{t("visit.text2")}</h1>
      <div className="border text-white w-fit px-4 text-xl mt-5 rounded-3xl py-2 capitalize hover:text-white-gray hover:bg-white cursor-pointer">
        {t("visit.btnText")}
      </div>
    </div>
  );
};

export default Visit;
