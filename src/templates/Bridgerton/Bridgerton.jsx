import { useState } from "react";

import "./Bridgerton.scss";

import demoInvitation from "../../data/demoInvitation";

import IntroVideo from "../LaMaisonDoree/IntroVideo";

import Hero5 from "./Hero5";
import Countdown5 from "./Countdown5";
import Map5 from "./Map5";
import DressCode5 from "./DressCode5";
import WeddingGift5 from "./WeddingGift5";
import RSVP5 from "./RSVP5";
import Footer5 from "./Footer5";

function Bridgerton({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("video");

  const handleVideoFinish = () => {
    setStage("content");
  };

  return (
    <div className={`bridgerton ${preview ? "preview-mode" : ""}`}>
      {stage === "video" && (
        <IntroVideo preview={preview} onFinish={handleVideoFinish} />
      )}

      {stage === "content" && (
        <div className="bridgerton__content">
          <Hero5 invitation={invitation} />

          <Map5 invitation={invitation} />

          <Countdown5 invitation={invitation} />

          <DressCode5 />

          <WeddingGift5 />

          <RSVP5 />

          <Footer5 invitation={invitation} />
        </div>
      )}
    </div>
  );
}

export default Bridgerton;
