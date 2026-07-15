import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import leftFlower from "../../assets/images/flower-top.png";
import rightFlower from "../../assets/images/flower-bottom.png";

import "./WeddingGift.scss";

function WeddingGift() {
  const { t } = useTranslation();

  return (
    <section className="gift">
      <motion.div
        className="gift__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={leftFlower}
          className="gift__flower gift__flower--left"
          alt=""
        />

        <img
          src={rightFlower}
          className="gift__flower gift__flower--right"
          alt=""
        />

        <span className="gift__subtitle">{t("gift.subtitle")}</span>

        <h2>{t("gift.title")}</h2>

        <p className="gift__text">{t("gift.text")}</p>
      </motion.div>
    </section>
  );
}

export default WeddingGift;
