import { useState } from "react";
import "./DayAndNight.scss";

import demoInvitation from "../../data/demoInvitation";

import IntroVideo from "../LaMaisonDoree/IntroVideo";
import Hero2 from "./Hero2";
import Countdown2 from "./Countdown2";
import Map2 from "./Map2";

function DayAndNight({ invitation = demoInvitation, preview = false }) {
  const [stage, setStage] = useState("intro");

  return (
    <div className={`day-night ${preview ? "preview-mode" : ""}`}>
      {stage === "intro" && <IntroVideo onFinish={() => setStage("hero")} />}

      {stage === "hero" && (
        <>
          <Hero2 invitation={invitation} />
          <Countdown2 invitation={invitation} />
          <Map2 invitation={invitation} />
        </>
      )}
    </div>
  );
}

export default DayAndNight;
