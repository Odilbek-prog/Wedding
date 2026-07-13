import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Countdown2.scss";

function Countdown2({ invitation }) {
  const { t } = useTranslation();

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

        <span className="countdown2__script">{t("countdown2.script")}</span>

        <h2>{t("countdown2.title")}</h2>

        <Countdown
          date={new Date(`${invitation.date} ${invitation.time}`)}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="countdown2__grid">
              <div className="countdown2__item">
                <h3>{days}</h3>
                <span>{t("countdown2.days")}</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{hours}</h3>
                <span>{t("countdown2.hours")}</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{minutes}</h3>
                <span>{t("countdown2.minutes")}</span>
              </div>

              <div className="countdown2__divider"></div>

              <div className="countdown2__item">
                <h3>{seconds}</h3>
                <span>{t("countdown2.seconds")}</span>
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
