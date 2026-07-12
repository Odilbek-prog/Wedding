import { motion, AnimatePresence } from "framer-motion";
import "./PhonePreview.scss";

function PhonePreview({ open, onClose, children }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="phone-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="phone-preview__overlay" onClick={onClose} />

        <motion.div
          className="phone-preview__phone"
          initial={{ scale: 0.85, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 40 }}
        >
          <div className="phone-preview__notch"></div>

          <button className="phone-preview__close" onClick={onClose}>
            ✕
          </button>

          <div
            className="phone-preview__screen"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PhonePreview;
