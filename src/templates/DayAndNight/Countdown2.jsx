import Countdown from "react-countdown";
import { motion } from "framer-motion";
import "./Countdown2.scss";

function Countdown2({ invitation }) {
  return (
    <section className="countdown2">
      <motion.div
        className="countdown2__inner"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="countdown2__ornament">✦ ✦ ✦</div>

        <span className="countdown2__script">Countdown</span>

        <h2>TO THE MOST SPECIAL DAY OF OUR LIVES</h2>

        <Countdown
          date={new Date(`${invitation.date} ${invitation.time}`)}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="countdown2__grid">
              <div className="countdown2__item">
                <h3>{days}</h3>
                <span>DAYS</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{hours}</h3>
                <span>HOURS</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{minutes}</h3>
                <span>MINUTES</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{seconds}</h3>
                <span>SECONDS</span>
              </div>
            </div>
          )}
        />

        <div className="countdown2__bottom"></div>
      </motion.div>
    </section>
  );
}

export default Countdown2;
