import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Map4.scss";

import venueImage from "../../assets/images/venue4.png";

function Map4({ invitation }) {
  const { t, i18n } = useTranslation();

  const weddingDate = new Date(invitation.date);

  const month = t(`months.${weddingDate.getMonth()}`);
  const day = weddingDate.getDate();
  const year = weddingDate.getFullYear();

  return (
    <section className="map4">
      <motion.div
        className="map4__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>{t("map4.title")}</h2>

        <p>{t("map4.subtitle")}</p>
      </motion.div>

      <motion.div
        className="map4__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={venueImage}
          alt={invitation.venue}
          className="map4__image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />

        <h3>{invitation.venue}</h3>

        <div className="map4__divider" />

        <div className="map4__datetime">
          <span>
            {day} {month} {year}
          </span>

          <span>{invitation.time}</span>
        </div>

        <div className="map4__line" />

        <p className="map4__address">{invitation.address}</p>

        <motion.a
          href={invitation.map}
          target="_blank"
          rel="noopener noreferrer"
          className="map4__button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("map4.button")}
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Map4;
