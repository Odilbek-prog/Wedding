import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import venueImage from "../../assets/images/venue.png";
import "./Map.scss";

function Map({ invitation }) {
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

        <span className="map__subtitle">Wedding Venue</span>

        <h2>{invitation.venue}</h2>

        <p className="map__date">
          {invitation.date}
          <br />
          {invitation.time}
        </p>

        <div className="map__line"></div>

        <div className="map__address">
          <FaLocationDot />

          <span>{invitation.address}</span>
        </div>

        <a href={invitation.map} target="_blank" rel="noreferrer">
          View On Map
        </a>
      </motion.div>
    </section>
  );
}

export default Map;
