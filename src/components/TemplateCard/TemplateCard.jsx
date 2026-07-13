import "./TemplateCard.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function TemplateCard({ template }) {
  return (
    <motion.div
      className="template-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img src={template.image} alt={template.name} />

      <div className="template-card__overlay">
        <h3>{template.name}</h3>

        <div className="template-card__buttons">
          <a
            href={template.link}
            target="_blank"
            rel="noopener noreferrer"
            className="template-card__btn"
          >
            Ko'rish
          </a>

          <a
            href="https://t.me/normuxamedov"
            target="_blank"
            rel="noreferrer"
            className="template-card__btn"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TemplateCard;
