import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./DressCode2.scss";

import dressCodeImage from "../../assets/images/dresscode.png";

function DressCode2() {
  const { t } = useTranslation();

  return (
    <section className="dress2">
      <motion.div
        className="dress2__container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="dress2__title">{t("dressCode2.title")}</span>

        <p className="dress2__subtitle">{t("dressCode2.subtitle")}</p>

        <motion.img
          src={dressCodeImage}
          alt={t("dressCode2.title")}
          className="dress2__image"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />

        <div className="dress2__card">
          <h3>{t("dressCode2.cardTitle")}</h3>

          <p className="dress2__text">{t("dressCode2.text")}</p>

          <p className="dress2__note">{t("dressCode2.note")}</p>

          <div className="dress2__divider"></div>

          <p className="dress2__footer">{t("dressCode2.footer")}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode2;
