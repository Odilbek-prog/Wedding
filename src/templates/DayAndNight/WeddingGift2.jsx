import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./WeddingGift2.scss";

import flowers from "../../assets/images/giftflowers.png";

function WeddingGift2() {
  const { t } = useTranslation();

  return (
    <section className="gift2">
      <motion.div
        className="gift2__wrapper"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="gift2__title">{t("gift2.title")}</span>

        <p className="gift2__subtitle">{t("gift2.subtitle")}</p>

        <div className="gift2__card">
          <p className="gift2__text">{t("gift2.text")}</p>

          <img src={flowers} alt="" className="gift2__flowers" />
        </div>
      </motion.div>
    </section>
  );
}

export default WeddingGift2;
