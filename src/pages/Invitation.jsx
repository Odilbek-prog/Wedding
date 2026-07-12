import demoInvitation from "../data/demoInvitation";
import LaMaisonDoree from "../templates/LaMaisonDoree/LaMaisonDoree";
import DayAndNight from "../templates/DayAndNight/DayAndNight";

function Invitation() {
  return <DayAndNight invitation={demoInvitation} />;
}

export default Invitation;
