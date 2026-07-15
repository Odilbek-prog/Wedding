import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./WeddingGift5.scss";
import weddingCakeImage from "../../assets/images/gifts-cake.png";

const WeddingGift5 = () => {
  const { t } = useTranslation();

  return (
    <section className="wedding-gift5">
      <div className="wedding-gift5__image-wrapper">
        <img src={weddingCakeImage} alt="Wedding Cake" />
      </div>

      <h2 className="wedding-gift5__title">{t("gift5.title")}</h2>

      <div className="wedding-gift5__content">
        <p className="wedding-gift5__description">{t("gift5.description")}</p>
      </div>
    </section>
  );
};

export default WeddingGift5;
