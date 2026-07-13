import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import "./Map2.scss";

import venue from "../../assets/images/venue2.png";

function Map2({ invitation }) {
  const { t } = useTranslation();

  return (
    <section className="map2">
      <motion.div
        className="map2__card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="map2__subtitle">{t("map2.subtitle")}</span>

        <h2>{invitation.venue}</h2>

        <div className="map2__divider"></div>

        <p className="map2__time">{invitation.time}</p>

        <motion.img
          src={venue}
          alt={invitation.venue}
          className="map2__image"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />

        <a
          href={invitation.map}
          target="_blank"
          rel="noreferrer"
          className="map2__button"
        >
          <FaLocationDot />

          <span>{t("map2.button")}</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Map2;
