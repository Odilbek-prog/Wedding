import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from "react-icons/fa6";

import leftFlower from "../../assets/images/vase-left.png";
import rightFlower from "../../assets/images/vase-right.png";

import "./RSVP.scss";

function RSVP() {
  const { t } = useTranslation();

  return (
    <section className="rsvp">
      <motion.div
        className="rsvp__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="rsvp__subtitle">{t("rsvp.subtitle")}</span>

        <h2>{t("rsvp.title")}</h2>

        <input placeholder={t("rsvp.fullName")} />

        <input placeholder={t("rsvp.phoneNumber")} />

        <textarea placeholder={t("rsvp.wishes")} />

        <img
          src={leftFlower}
          alt=""
          className="rsvp__flower rsvp__flower--left"
        />

        <img
          src={rightFlower}
          alt=""
          className="rsvp__flower rsvp__flower--right"
        />

        <button>
          <FaPaperPlane />
          {t("rsvp.submit")}
        </button>
      </motion.div>
    </section>
  );
}

export default RSVP;
