import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";

import venueImage from "../../assets/images/venue.png";

import "./Map.scss";

function Map({ invitation }) {
  const { t, i18n } = useTranslation();

  const weddingDate = new Date(invitation.date);

  const month = t(`months.${weddingDate.getMonth()}`);
  const day = weddingDate.getDate();
  const year = weddingDate.getFullYear();

  return (
    <section className="map">
      <motion.div
        className="map__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8 }}
      >
        <motion.img
          src={venueImage}
          alt=""
          className="map__image"
          whileHover={{
            scale: 1.04,
            y: -5,
          }}
          transition={{ duration: 0.4 }}
        />

        <span className="map__subtitle">{t("map.subtitle")}</span>

        <h2>{invitation.venue}</h2>

        <p className="map__date">
          {day} {month} {year}
          <br />
          {invitation.time}
        </p>

        <div className="map__line"></div>

        <div className="map__address">
          <FaLocationDot />

          <span>{invitation.address}</span>
        </div>

        <a href={invitation.map} target="_blank" rel="noreferrer">
          {t("map.button")}
        </a>
      </motion.div>
    </section>
  );
}

export default Map;
