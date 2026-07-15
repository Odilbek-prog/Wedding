import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ladiesFlowers from "../../assets/images/bouquet.png";
import menFlowers from "../../assets/images/menflower.png";

import "./DressCode.scss";

function DressCode() {
  const { t } = useTranslation();

  return (
    <section className="dress">
      <motion.h2
        className="dress__title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t("dressCode.title")}
      </motion.h2>

      <div className="dress__wrapper">
        <motion.div
          className="dress__card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={ladiesFlowers}
            className="dress__flower dress__flower--left"
            alt=""
          />

          <span className="dress__day">{t("dressCode.ladiesLabel")}</span>

          <h3>{t("dressCode.ladiesTitle")}</h3>

          <p>{t("dressCode.ladiesDescription")}</p>
        </motion.div>

        <motion.div
          className="dress__card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={menFlowers}
            className="dress__flower dress__flower--right"
            alt=""
          />

          <span className="dress__day">{t("dressCode.gentlemenLabel")}</span>

          <h3>{t("dressCode.gentlemenTitle")}</h3>

          <p>{t("dressCode.gentlemenDescription")}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default DressCode;
