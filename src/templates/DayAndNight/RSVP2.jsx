import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./RSVP2.scss";

import defaultcouple from "../../assets/images/rsvpimg.png";

function RSVP2({ invitation }) {
  const API_URL = "https://wedding-backend-8a8r.onrender.com";
  const { t } = useTranslation();

  return (
    <section className="rsvp2">
      <motion.div
        className="rsvp2__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={
            invitation?.coupleImage
              ? `${API_URL}${invitation.coupleImage}`
              : couple
          }
          alt=""
          className="rsvp2__image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <h2>{t("rsvp2.title")}</h2>

        <p className="rsvp2__subtitle">{t("rsvp2.subtitle")}</p>

        <form className="rsvp2__form">
          <input placeholder={t("rsvp2.fullName")} />

          <input placeholder={t("rsvp2.phoneNumber")} />

          <textarea placeholder={t("rsvp2.wishes")} />

          <button type="submit">{t("rsvp2.submit")}</button>
        </form>
      </motion.div>
    </section>
  );
}

export default RSVP2;
