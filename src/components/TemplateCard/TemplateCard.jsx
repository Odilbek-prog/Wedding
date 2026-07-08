import "./TemplateCard.scss";
import { motion } from "framer-motion";

function TemplateCard({ template, onPreview }) {
  return (
    <motion.div
      className="template-card"
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <img src={template.image} alt={template.name} />

      <div className="template-card__overlay">
        <h3>{template.name}</h3>

        <div className="template-card__buttons">
          <button onClick={() => onPreview(template)}>Ko'rish</button>

          <a href="https://t.me/normuxamedov" target="_blank" rel="noreferrer">
            Bog'lanish
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TemplateCard;
