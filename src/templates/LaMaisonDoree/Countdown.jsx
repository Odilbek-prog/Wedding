import { motion } from "framer-motion";
import Countdown from "react-countdown";

import "./Countdown.scss";

function CountdownSection({ invitation }) {
  return (
    <section className="countdown">
      <motion.div
        className="countdown__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="countdown__subtitle">Our Special Day Is Coming</span>

        <h2>Countdown To Forever</h2>

        <p>
          Every second brings us closer to the beginning of our beautiful
          journey together.
        </p>
      </motion.div>

      <Countdown
        date={new Date(`${invitation.date} ${invitation.time}`)}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="countdown__grid">
            {[
              {
                number: days,
                label: "Days",
              },
              {
                number: hours,
                label: "Hours",
              },
              {
                number: minutes,
                label: "Minutes",
              },
              {
                number: seconds,
                label: "Seconds",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="countdown__item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <div className="countdown__number">
                  {String(item.number).padStart(2, "0")}
                </div>

                <div className="countdown__label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      />
    </section>
  );
}

export default CountdownSection;
