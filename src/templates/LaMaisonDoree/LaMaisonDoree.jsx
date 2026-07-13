import { useState } from "react";
import { motion } from "framer-motion";

import "./LaMaisonDoree.scss";

import demoInvitation from "../../data/demoInvitation";

import Intro from "./Intro";
import Hero from "./Hero";
import Music from "./Music";
import CountdownSection from "./Countdown";
import Map from "./Map";
import Footer from "./Footer";
import DressCode from "./DressCode";
import WeddingGift from "./WeddingGift";
import RSVP from "./RSVP";
import IntroVideo from "./IntroVideo";

function LaMaisonDoree({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("video");
  const [music, setMusic] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const handleVideoFinish = () => {
    setStage("intro");
  };

  const openInvitation = () => {
    setDoorOpen(true);

    setTimeout(() => {
      setMusic(true);
    }, 600);

    setTimeout(() => {
      setStage("content");
    }, 1800);
  };

  return (
    <div className={`la-maison-doree ${preview ? "preview-mode" : ""}`}>
      <Music play={!preview && music} />
      {stage === "video" && (
        <IntroVideo preview={preview} onFinish={handleVideoFinish} />
      )}

      {stage === "intro" && (
        <Intro
          preview={preview}
          invitation={invitation}
          opened={doorOpen}
          onOpen={openInvitation}
        />
      )}

      {stage === "content" && (
        <div className="template-content template-content--show">
          <Hero invitation={invitation} />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CountdownSection invitation={invitation} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Map invitation={invitation} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <DressCode />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <WeddingGift />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <RSVP />
          </motion.div>

          <Footer invitation={invitation} />
        </div>
      )}
    </div>
  );
}

export default LaMaisonDoree;
