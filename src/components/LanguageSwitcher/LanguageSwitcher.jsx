import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="language">
      <button
        className={i18n.language === "uz" ? "active" : ""}
        onClick={() => changeLanguage("uz")}
      >
        UZ
      </button>

      <span>|</span>

      <button
        className={i18n.language === "ru" ? "active" : ""}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
    </div>
  );
}

export default LanguageSwitcher;
