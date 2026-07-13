import { useState } from "react";

import "./Bloom.scss";

import demoInvitation from "../../data/demoInvitation";

import IntroVideo from "../LaMaisonDoree/IntroVideo";

import Hero3 from "./Hero3";
import Countdown3 from "./Countdown3";
import Map3 from "./Map3";
import DressCode3 from "./DressCode3";
import RSVP3 from "./RSVP3";
import Footer3 from "./Footer3";
import Music from "../LaMaisonDoree/Music";

function Bloom({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("video");
  const [music, setMusic] = useState(false);

  const handleVideoFinish = () => {
    setStage("content");
    setMusic(true);
  };

  return (
    <div className={`bloom ${preview ? "preview-mode" : ""}`}>
      <Music play={!preview && music} />
      {stage === "video" && (
        <IntroVideo preview={preview} onFinish={handleVideoFinish} />
      )}

      {stage === "content" && (
        <div className="bloom__content">
          <Hero3 invitation={invitation} />

          <Countdown3 invitation={invitation} />

          <Map3 invitation={invitation} />

          <DressCode3 />
          <RSVP3 />

          <Footer3 invitation={invitation} />
        </div>
      )}
    </div>
  );
}

export default Bloom;
