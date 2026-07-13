import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Map5.scss";

import venueImage from "../../assets/images/map5top.png";

function Map5({ invitation }) {
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const eventDate = new Date(invitation.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="map5">
      <motion.img
        src={venueImage}
        alt={invitation.venue}
        className="map5__image"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="map5__content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>
          {t("map5.title1")}
          <br />
          {t("map5.title2")}
        </h2>

        <p className="map5__description">
          {t("map5.description1")}
          <br />
          {t("map5.description2")}
        </p>

        <div className="map5__divider" />

        <h3>{t("map5.timeLocation")}</h3>

        <div className="map5__info">
          <p className="map5__venue">{invitation.venue}</p>

          <p className="map5__address">{invitation.address}</p>

          <span className="map5__date">{eventDate}</span>

          <span className="map5__time">{invitation.time}</span>
        </div>

        <motion.a
          href={invitation.map}
          target="_blank"
          rel="noopener noreferrer"
          className="map5__button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("map5.button")}
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Map5;
