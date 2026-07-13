import { motion } from "framer-motion";

import "./Map5.scss";

import venueImage from "../../assets/images/map5top.png";

function Map5({ invitation }) {
  const eventDate = new Date(invitation.date).toLocaleDateString("en-US", {
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
          Join Us To Celebrate
          <br />
          Our Wedding
        </h2>

        <p className="map5__description">
          We are so excited to celebrate this
          <br />
          special day with you.
        </p>

        <div className="map5__divider" />

        <h3>Time &amp; Location</h3>

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
          View on Map
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Map5;
