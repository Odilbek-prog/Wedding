import { Routes, Route } from "react-router-dom";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Invitation from "./pages/Invitation"; // Izohdan ochildi
import "./App.scss";
import demoInvitation from "./data/demoInvitation";
import LaMaisonDoree from "./templates/LaMaisonDoree/LaMaisonDoree";
import DayAndNight from "./templates/DayAndNight/DayAndNight";
import Bloom from "./templates/Bloom/Bloom";
import Royal from "./templates/Royal/Royal";
import Bridgerton from "./templates/Bridgerton/Bridgerton";

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

        {/* Demo dynamic linklar */}
        <Route
          path="/demo-la-maison-doree"
          element={<LaMaisonDoree invitation={demoInvitation} />}
        />
        <Route
          path="/demo-day-and-night"
          element={<DayAndNight invitation={demoInvitation} />}
        />
        <Route
          path="/demo-bloom"
          element={<Bloom invitation={demoInvitation} />}
        />
        <Route
          path="/demo-royal"
          element={<Royal invitation={demoInvitation} />}
        />
        <Route
          path="/demo-bridgerton"
          element={<Bridgerton invitation={demoInvitation} />}
        />

        {/* Haqiqiy taklifnoma dynamic havolasi */}
        <Route path="/invitation/:slug" element={<Invitation />} />
      </Routes>
    </>
  );
}

export default App;
