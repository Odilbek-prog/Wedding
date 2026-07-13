import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import "./Map3.scss";

import flowers from "../../assets/images/maptop.png";
import frame from "../../assets/images/mapbg.png";
import venue from "../../assets/images/venue3.png";

function Map3({ invitation }) {
  const { t, i18n } = useTranslation();

  const eventDate = new Date(invitation.date).toLocaleDateString(
    i18n.language === "ru" ? "ru-RU" : "uz-UZ",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <section className="map3">
      <img src={flowers} alt="" className="map3__flowers" />

      <motion.div
        className="map3__card"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div
          className="map3__frame"
          style={{
            backgroundImage: `url(${frame})`,
          }}
        >
          <span className="map3__subtitle">
            {t("map3.subtitle1")}
            <br />
            {t("map3.subtitle2")}
          </span>

          <span className="map3__small">{t("map3.small")}</span>

          <h2>{invitation.venue}</h2>

          <div className="map3__date">{eventDate}</div>

          <div className="map3__time">{invitation.time}</div>

          <div className="map3__address">{invitation.address}</div>

          <motion.img
            src={venue}
            alt={invitation.venue}
            className="map3__venue"
            whileHover={{
              scale: 1.05,
            }}
          />
        </div>

        <a
          href={invitation.map}
          target="_blank"
          rel="noreferrer"
          className="map3__button"
        >
          <FaLocationDot />
          {t("map3.button")}
        </a>
      </motion.div>
    </section>
  );
}

export default Map3;
