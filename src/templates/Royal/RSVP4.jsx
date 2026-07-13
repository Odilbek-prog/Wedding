import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./RSVP4.scss";

import ornament from "../../assets/images/ornament.png";

function RSVP4() {
  const { t } = useTranslation();

  return (
    <section className="rsvp4">
      <motion.img
        src={ornament}
        alt=""
        className="rsvp4__ornament"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="rsvp4__header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t("rsvp4.title")}</h2>

        <p>{t("rsvp4.subtitle")}</p>
      </motion.div>

      <motion.form
        className="rsvp4__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="rsvp4__group">
          <label>{t("rsvp4.fullName")}</label>

          <input type="text" placeholder={t("rsvp4.fullNamePlaceholder")} />
        </div>

        <div className="rsvp4__group">
          <label>{t("rsvp4.phoneNumber")}</label>

          <input type="tel" placeholder={t("rsvp4.phonePlaceholder")} />
        </div>

        <div className="rsvp4__group">
          <label>{t("rsvp4.wishes")}</label>

          <textarea rows="6" placeholder={t("rsvp4.wishesPlaceholder")} />
        </div>

        <motion.button
          type="submit"
          className="rsvp4__button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("rsvp4.submit")}
        </motion.button>
      </motion.form>
    </section>
  );
}

export default RSVP4;
