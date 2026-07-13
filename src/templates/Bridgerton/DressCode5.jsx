import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./DressCode5.scss";

import fan from "../../assets/images/fan.png";

function DressCode5() {
  const { t } = useTranslation();

  return (
    <section className="dress5">
      <motion.img
        src={fan}
        alt={t("dress5.title")}
        className="dress5__image"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="dress5__container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="dress5__title">{t("dress5.title")}</span>

        <p className="dress5__subtitle">{t("dress5.subtitle")}</p>

        <div className="dress5__card">
          <p className="dress5__card-text">{t("dress5.text1")}</p>

          <p className="dress5__card-text">{t("dress5.text2")}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode5;
