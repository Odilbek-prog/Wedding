import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

import "./Map3.scss";

import flowers from "../../assets/images/maptop.png";
import frame from "../../assets/images/mapbg.png";
import venue from "../../assets/images/venue3.png";

function Map3({ invitation }) {
  return (
    <section className="map3">
      {/* TOP FLOWERS */}

      <img src={flowers} alt="" className="map3__flowers" />

      {/* CARD */}

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
        <div className="map3__frame">
          <span className="map3__subtitle">
            Ceremony
            <br />& Reception
          </span>

          <span className="map3__small">WHERE WE CELEBRATE</span>

          <h2>{invitation.venue}</h2>

          <div className="map3__date">{invitation.date}</div>

          <div className="map3__time">{invitation.time}</div>

          <div className="map3__address">{invitation.address}</div>

          <motion.img
            src={venue}
            alt=""
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
          Open In Maps
        </a>
      </motion.div>
    </section>
  );
}

export default Map3;
