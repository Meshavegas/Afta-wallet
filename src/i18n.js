import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// console.log(LanguageDetector.name.toString, "++++++++++++++++++++++++++");
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/src/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: false,
    ns: ["common", "home", "navbar", "terms"],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
      postProcess: "html",
    },
    react: {
      wait: true,
    },
  });
export default i18n;
