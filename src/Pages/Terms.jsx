import React from "react";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation(["terms"]);
  return (
    <div className="min-h-screen md:px-32 px-8 my-6">
      <h1 className=" text-3xl text-center mb-9">{t("title")}</h1>
      <div className="leading-10 text-lg">
        <p>{t("date")}</p>
        <p>
          1. <b>{t("intro.title")}</b>
        </p>
        <p>
          {t("intro.welcome")}
          <b>{t("intro.company")}</b>({t("intro.moto")})!
        </p>
        <p>
          {t("intro.text1")}
          <b>{t("intro.appName")}</b>({t("intro.text2")}){" "}
          <b>{t("intro.company")}</b>.
        </p>
        <p>{t("intro.text3")}</p>
        <p>{t("intro.text4")}</p>
        <p>
          {t("intro.text5")}
          <b>{t("intro.mail")}</b>
          {t("intro.text6")}
        </p>
        <p>
          2. <b>{t("comm.title")}</b>
        </p>
        <p>{t("comm.text")}</p>
        <p>
          3. <b>{t("purchases.tilte")}</b>
        </p>
        <p>{t("purchases.text1")}</p>
        <p>{t("purchases.text2")}</p>
        <p>{t("purchases.text3")}</p>
        <p>{t("purchases.text4")}</p>
        <p>{t("purchases.text5")}</p>
        <p>
          3a. <b>{t("fees.title")}</b>
        </p>
        <p>{t("fees.text")}</p>
        <p>
          3b. <b>{t("cheatCode.title")}</b>
        </p>
        <p>{t("cheatCode.text")}</p>
        <p>
          4. <b>{t("contest.title")}</b>
        </p>
        <p>{t("contest.text")}</p>
        <p>
          5. <b>{t("contest.title")}</b>
        </p>
        <p>
          {t("contest.text")}
          <b>{t("contest.text2")}</b>
          {t("contest.text3")}
        </p>
        <p>
          6. <b>{t("contest.title")}</b>
        </p>
        <p>{t("contest.text")}</p>
        <p>
          7. <b>{t("prohibite.title")}</b>
        </p>
        <p>{t("prohibite.text")}</p>
        <p>{t("prohibite.text2")}</p>
        <p>{t("prohibite.text3")}</p>
        <p>{t("prohibite.text4")}</p>
        <p>{t("prohibite.text5")}</p>
        <p>{t("prohibite.text6")}</p>
        <p>{t("prohibite.text7")}</p>
        <p>{t("prohibite.text8")}</p>

        <p>{t("prohibite.text9")}</p>
        <p>{t("prohibite.text10")}</p>
        <p>{t("prohibite.text11")}</p>
        <p>{t("prohibite.text12")}</p>
        <p>{t("prohibite.text13")}</p>
        <p>{t("prohibite.text14")}</p>
        <p>{t("prohibite.text15")}</p>
        <p>{t("prohibite.text16")}</p>
        <p>{t("prohibite.text17")}</p>
        <p>
          8. <b>{t("analytics.title")}</b>
        </p>
        <p>{t("analytics.text")}</p>
        <p>
          9. <b>{t("minors.title")}</b>
        </p>
        <p>{t("minors.text")}</p>
        <p>
          10. <b>{t("account.title")}</b>
        </p>
        <p>{t("account.text")}</p>
        <p>{t("account.text2")}</p>
        <p>{t("account.text3")}</p>
        <p>{t("account.text4")}</p>
        <p>
          11. <b>{t("intlProp.title")}</b>
        </p>
        <p>{t("intlProp.text")}</p>
        <p>
          12. <b>{t("copyright.title")}</b>
        </p>
        <p>{t("copyright.text")}</p>
        <p>{t("copyright.text2")}</p>
        <p>{t("copyright.text3")}</p>
        <p>
          13. <b>{t("notice.title")}</b>
        </p>
        <p>{t("notice.text")}</p>
        <p>{t("notice.text1")}</p>
        <p>{t("notice.text2")}</p>
        <p>{t("notice.text3")}</p>
        <p>{t("notice.text4")}</p>
        <p>{t("notice.text5")}</p>
        <p>{t("notice.text6")}</p>
        <p>{t("notice.text7")}</p>
        <p>
          14. <b>{t("feedback.title")}</b>
        </p>
        <p>{t("feedback.text")}</p>
        <p>
          15. <b>{t("links.title")}</b>
        </p>
        <p>{t("links.text")}</p>
        <p>{t("links.text2")}</p>
        <p>{t("links.text3")}</p>
        <p>{t("links.text4")}</p>
        <p>
          16. <b>{t("disclaimer.title")} </b>
        </p>
        <p>{t("disclaimer.text")}</p>
        <p>{t("disclaimer.text2")}</p>
        <p>{t("disclaimer.text3")}</p>
        <p>{t("disclaimer.text4")}</p>
        <p>
          17. <b>{t("limitation.title")}</b>
        </p>
        <p>{t("limitation.text")}</p>
        <p>
          18. <b>{t("termination.title")}</b>
        </p>
        <p>{t("termination.text")}</p>
        <p>{t("termination.text2")}</p>
        <p>{t("termination.text3")}</p>
        <p>
          19. <b>{t("governing.title")}</b>
        </p>
        <p>{t("governing.text")}</p>
        <p>{t("governing.text2")}</p>
        <p>
          20. <b>{t("change.title")}</b>
        </p>
        <p>{t("change.text")}</p>
        <p>
          21. <b>{t("amendments.title")}</b>
        </p>
        <p>{t("amendments.text")}</p>
        <p>{t("amendments.text2")}</p>
        <p>{t("amendments.text3")}</p>
        <p>
          22. <b>{t("waiver.title")}</b>
        </p>
        <p>{t("waiver.text")}</p>
        <p>{t("waiver.text2")}</p>
        <p>
          23. <b>{t("ads.title")}</b>
        </p>
        <p>{t("ads.text")}</p>
        <p>
          {t("ads.text2")} <strong>$0.05</strong>
          {t("ads.text3")} <strong>$0.09</strong>
          {t("ads.text4")}.
        </p>
        <p>
          24. <b>{t("acknowledgement.title")}</b>
        </p>
        <p>{t("acknowledgement.text")}</p>
        <p>
          25. <b>{t("contactus.title")}</b>
        </p>
        <p>
          {t("contactus.text")}
          <b> support@aftawallet.com</b>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
