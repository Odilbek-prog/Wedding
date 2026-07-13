import { useState } from "react";

import "./Royal.scss";

import demoInvitation from "../../data/demoInvitation";

import IntroVideo from "../LaMaisonDoree/IntroVideo";

import Hero4 from "./Hero4";
import Countdown4 from "./Countdown4";
import Map4 from "./Map4";
import DressCode4 from "./DressCode4";
import WeddingGift4 from "./WeddingGift4";
import RSVP4 from "./RSVP4";
import Footer4 from "./Footer4";

function Bloom({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("video");

  const handleVideoFinish = () => {
    setStage("content");
  };

  return (
    <div className={`royal ${preview ? "preview-mode" : ""}`}>
      {stage === "video" && (
        <IntroVideo preview={preview} onFinish={handleVideoFinish} />
      )}

      {stage === "content" && (
        <div className="royal__content">
          <Hero4 invitation={invitation} />

          <Countdown4 invitation={invitation} />

          <Map4 invitation={invitation} />

          <DressCode4 />

          <WeddingGift4 />
          <RSVP4 />

          <Footer4 invitation={invitation} />
        </div>
      )}
    </div>
  );
}

export default Bloom;
