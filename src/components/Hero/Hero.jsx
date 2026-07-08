import "./Hero.scss";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const scrollToTemplates = () => {
    document.getElementById("templates").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaHeart className="hero-icon" />

        <h1>Wedding Invitations</h1>

        <p>
          Create beautiful online wedding invitations and share them with your
          loved ones.
        </p>

        <button onClick={scrollToTemplates}>
          View Templates
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;