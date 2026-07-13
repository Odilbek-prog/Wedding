import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
// import Invitation from "./pages/Invitation";
import "./App.scss";
import demoInvitation from "./data/demoInvitation";
import LaMaisonDoree from "./templates/LaMaisonDoree/LaMaisonDoree";
import DayAndNight from "./templates/DayAndNight/DayAndNight";
import Bloom from "./templates/Bloom/Bloom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
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
      {/* <Route path="/invitation/:slug" element={<Invitation />} /> */}
    </Routes>
  );
}

export default App;
