import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./DressCode4.scss";

import tower from "../../assets/images/dress4top.png";
import cardBg from "../../assets/images/dress4bg.png";

function DressCode4() {
  const { t } = useTranslation();

  return (
    <section
      className="dress4"
      style={{
        backgroundImage: `url(${cardBg})`,
      }}
    >
      <motion.img
        src={tower}
        alt=""
        className="dress4__tower"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="dress4__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t("dressCode4.title")}
        </motion.h2>

        <div className="dress4__section">
          <h3>{t("dressCode4.womenTitle")}</h3>

          <p>{t("dressCode4.womenText")}</p>
        </div>

        <div className="dress4__divider" />

        <div className="dress4__section">
          <h3>{t("dressCode4.menTitle")}</h3>

          <p>{t("dressCode4.menText")}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode4;
