import React from "react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation(["privacy"]);
  return (
    <div className=" min-h-screen md:px-32 px-8">
      <h1 className=" text-3xl text-center mb-9">{t("title")}</h1>
      <div className="leading-8 text-lg">
        <i>{t("date")}</i>
        <p>1. {t("intro.title")}</p>
        {t("intro.welcome")} <span className=" font-bold">PayWS Ltd.</span>
        <span className=" font-bold">PayWS Ltd</span> {t("intro.moto")}
        <span className=" font-bold"> aftawallet.com</span> ({t("intro.text1")}
        <span className=" font-bold"> {t("intro.text2")}</span>).
        <p>
          {t("intro.text3")}(<span className=" font-bold"> “Terms”</span>){" "}
          {t("intro.text4")}(<span className=" font-bold"> “agreement”</span>).
        </p>
        <p className=" font-bold"> 2. {t("definition.title")}</p>
        <p>
          <span className=" font-bold"> {t("definition.service")}</span>
          {t("definition.text")}
          <span className=" font-bold">aftawallet.com</span>{" "}
          {t("definition.text2")}
          PayWS Ltd.
        </p>
        <p>
          <span className=" font-bold">{t("definition.peronalData")}</span>{" "}
          {t("definition.text3")}
        </p>
        <p>
          <span className=" font-bold">{t("definition.userDate")}</span>{" "}
          {t("definition.text4")}
          <span className=" font-bold">COOKIES</span> {t("definition.text5")}
        </p>
        <p>
          <span className=" font-bold">{t("definition.dateCont")}</span>{" "}
          {t("definition.text6")}
        </p>
        <p>
          <span className=" font-bold">{t("definition.dataPro")}</span>{" "}
          {t("definition.text7")}
        </p>
        <p className=" font-bold"> {t("definition.dateSuj")}</p>{" "}
        {t("definition.text8")}
        <p className=" font-bold"> {t("definition.user")}</p>{" "}
        {t("definition.text9")}
        <p className=" font-bold">3.{t("information.title")}</p>
        {t("information.text")}
        <p className=" font-bold">4. {t("typeData.title")}</p>
        <p className=" font-bold">{t("typeData.text")}</p>
        {t("typeData.text2")} <br />
        <br />
        {t("typeData.text3")}
        {t("typeData.text4")} <br />
        {t("typeData.text5")}
        <br />
        {t("typeData.text6")}
        <br />
        {t("typeData.text7")}
        <p className=" font-bold">{t("typeData.text8")}</p>
        {t("typeData.text9")}
        <span className=" font-bold">{t("typeData.text10")}</span>.<br />{" "}
        {t("typeData.text10")}
        <br />
        <p className=" font-bold">{t("typeData.text13")}</p>
        {t("typeData.text14")}
        <span className=" font-bold">{t("typeData.text15")}</span>.{" "}
        {t("typeData.text16")}
        <br /> {t("typeData.text17")}
        <br />
        <p className=" font-bold">{t("typeData.text18")}</p>
        {t("typeData.text19")}
        <br />
        {t("typeData.text20")} <br />
        {t("typeData.text21")}
        <br />
        {t("typeData.text22")} <br />
        <span className=" font-bold"> {t("typeData.text23")}</span>:{" "}
        {t("typeData.text24")} <br />
        <span className=" font-bold"> {t("typeData.text25")}</span>:{" "}
        {t("typeData.text26")}
        <br />
        0.3.<span className=" font-bold"> {t("typeData.text27")}</span>:{" "}
        {t("typeData.text28")} <br />
        <span className=" font-bold"> {t("typeData.text29")}</span>:{" "}
        {t("typeData.text30")}
        <br />
        <p className=" font-bold"> {t("typeData.text31")}</p>
        {t("typeData.text32")}
        <br />
        <p className=" font-bold">5. {t("useDate.title")}</p>
        {t("useDate.text")}
        <br />
        {t("useDate.text1")} <br />
        {t("useDate.text2")} <br />
        {t("useDate.text3")} <br />
        {t("useDate.text4")} <br />
        {t("useDate.text5")}
        <br />
        {t("useDate.text6")}
        <br />
        {t("useDate.text7")} <br />
        {t("useDate.text8")} <br />
        {t("useDate.text9")}
        <br />
        {t("useDate.text10")}
        <br />
        {t("useDate.text11")}
        <br />
        {t("useDate.text12")} <br />
        {t("useDate.text13")}
        <p className=" font-bold">6. {t("retention.title")}</p>
        {t("retention.text")}
        <br /> {t("retention.text")}
        <br />
        <p className=" font-bold">7. {t("tranfers.title")}</p>
        {t("tranfers.text")}
        <br /> {t("tranfers.text2")}
        <br /> {t("tranfers.text3")}
        <br /> {t("tranfers.text4")}
        <br />
        <p className=" font-bold">8. {t("disclosure.title")}</p>
        {t("disclosure.text")}
        <p className=" font-bold">{t("disclosure.text2")}</p>
        {t("disclosure.text3")}
        <br />
        <p className=" font-bold">{t("disclosure.text4")}</p>
        {t("disclosure.text5")} <br />
        {t("disclosure.text6")} <br />
        {t("disclosure.text7")}
        <br />
        {t("disclosure.text8")} <br />
        {t("disclosure.text9")} <br />
        {t("disclosure.text10")}
        <br />
        {t("disclosure.text11")}
        <br />
        {t("disclosure.text12")} <br />
        {t("disclosure.text13")}
        <br />
        <p className=" font-bold">9. {t("security.title")}</p>
        {t("security.text")}
        <p className=" font-bold">10. {t("security.text2")}</p>
        {t("security.text3")}
        <br />
        {t("security.text4")} <br />
        {t("security.text5")} <br />
        {t("security.text6")}
        <br />
        {t("security.text7")}
        <br />
        {t("security.text8")}
        <br />
        {t("security.text9")}
        <br />
        {t("security.text10")}
        <br />
        {t("security.text11")}
        <br />
        {t("security.text12")}
        <p className=" font-bold">{t("security.text13")}</p>
        {t("security.text14")}
        <br />
        {t("security.text15")}
        <br />
        {t("security.text16")}
        <br />
        {t("security.text17")}
        <br />
        {t("security.text18")}
        <br />
        {t("security.text19")}
        <br />
        {t("security.text20")} <br />
        {t("security.text21")}
        <br />
        {t("security.text22")}
        <p className=" font-bold">12. {t("protection.title")}</p>
        {t("protection.text")}
        <p className=" font-bold">{t("protection.text2")}</p>
        {t("protection.text3")}
        <br />
        {t("protection.text4")}
        <br />
        {t("protection.text5")} <br />
        {t("protection.text6")}
        <br />
        {t("protection.text7")}
        <br />
        {t("protection.text8")}
        <br />
        {t("protection.text9")}
        <br />
        {t("protection.text10")}
        <p className=" font-bold">{t("protection.text11")}</p>
        <p className=" font-bold">{t("protection.text12")}</p>
        {t("protection.text13")}
        <br />
        {t("protection.text14")}
        <br />
        {t("protection.text15")}
        <br />
        {t("protection.text16")}
        <p className=" font-bold">13. {t("providers.title")}</p>
        {t("providers.text")} <br />
        {t("providers.text2")}
        <p className=" font-bold">{t("providers.text3")}</p>
        {t("providers.text4")}
        <p className=" font-bold">{t("providers.text5")}</p>
        {t("providers.text6")}
        <p className=" font-bold">{t("providers.text7")}</p>
        {t("providers.text8")}
        <p className=" font-bold">{t("providers.text9")}</p>
        {t("providers.text10")}
        <br />
        {t("providers.text11")}
        <br />
        <span className=" font-bold">{t("providers.text12")}</span>
        {t("providers.text13")} <br />
        {t("providers.text14")}
        <br />
        <span className=" font-bold">{t("providers.text15")}</span>
        {t("providers.text16")}
        <span className=" font-bold">{t("providers.text17")}</span>{" "}
        {t("providers.text27")}
        <span className=" font-bold">{t("providers.text18")}</span>).
        <br />
        {t("providers.text19")}
        <br />
        <span className=" font-bold">{t("providers.text20")}</span>
        {t("providers.text22")} <br />
        {t("providers.text23")}
        <br />
        {t("providers.text24")}
        <p className=" font-bold">{t("providers.text25")}</p>
        {t("providers.text26")}
        <span className=" font-bold"> support@aftawallet.com.</span>
      </div>
    </div>
  );
};

export default Privacy;
