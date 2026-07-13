import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./WeddingGift5.scss";
import weddingCakeImage from "../../assets/images/gifts-cake.png";

const WeddingGift5 = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="wedding-gift5">
      <div className="wedding-gift5__image-wrapper">
        <img src={weddingCakeImage} alt="Wedding Cake" />
      </div>

      <h2 className="wedding-gift5__title">{t("gift5.title")}</h2>

      <div className="wedding-gift5__content">
        <p className="wedding-gift5__description">{t("gift5.description")}</p>

        <button
          className="wedding-gift5__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{t("gift5.cardPreferred")}</span>

          <span
            className={`wedding-gift5__arrow ${
              isOpen ? "wedding-gift5__arrow--rotate" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="wedding-gift5__info">
            <p>{t("gift5.cardInfo")}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingGift5;
