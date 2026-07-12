import { useState } from "react";
import "./DayAndNight.scss";

import demoInvitation from "../../data/demoInvitation";

import IntroVideo from "../LaMaisonDoree/IntroVideo";
import Hero2 from "./Hero2";
import Countdown2 from "./Countdown2";
import Map2 from "./Map2";
import DressCode2 from "./DressCode2";
import WeddingGift2 from "./WeddingGift2";
import RSVP2 from "./RSVP2";
import Footer2 from "./Footer2";

function DayAndNight({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("video");

  return (
    <div className={`day-night ${preview ? "preview-mode" : ""}`}>
      {stage === "video" && (
        <IntroVideo preview={preview} onFinish={() => setStage("hero")} />
      )}

      {stage === "hero" && (
        <>
          <Hero2 invitation={invitation} />
          <Countdown2 invitation={invitation} />
          <Map2 invitation={invitation} />
          <DressCode2 />
          <WeddingGift2 />
          <RSVP2 />
          <Footer2 invitation={invitation} />
        </>
      )}
    </div>
  );
}

export default DayAndNight;
