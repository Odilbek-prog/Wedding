import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import topFlower from "../../assets/images/flower-top.png";
import bottomFlower from "../../assets/images/flower-bottom.png";
import "./Hero.scss";

function Hero({ invitation }) {
  const scrollNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <motion.section
      className="hero"
      initial={{
        opacity: 0,
        scale: 1.12,
        filter: "blur(15px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="hero__bg"
        animate={{
          scale: [1.08, 1.13, 1.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />
      <motion.img
        src={topFlower}
        className="hero__flower hero__flower--top"
        animate={{
          rotate: [0, 2, 0, -2, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.img
        src={bottomFlower}
        className="hero__flower hero__flower--bottom"
        animate={{
          rotate: [180, 182, 180, 178, 180],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="hero__bg"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="hero__invite"
          initial={{ opacity: 0, letterSpacing: 15 }}
          animate={{ opacity: 1, letterSpacing: 6 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Together with their families
        </motion.span>

        <motion.h1
          className="hero__names"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {invitation.groom}

          <span>&</span>

          {invitation.bride}
        </motion.h1>

        <div className="hero__dateCard">
          <div className="hero__month">JULY</div>

          <div className="hero__middle">
            <span className="hero__day">23</span>

            <span className="hero__year">2026</span>
          </div>

          <div className="hero__weekday">THURSDAY</div>
        </div>

        <motion.div
          className="hero__scroll"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          onClick={scrollNext}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
