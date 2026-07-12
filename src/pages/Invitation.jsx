import demoInvitation from "../data/demoInvitation";
import LaMaisonDoree from "../templates/LaMaisonDoree/LaMaisonDoree";
import DayAndNight from "../templates/DayAndNight/DayAndNight";
import Bloom from "../templates/Bloom/Bloom";

function Invitation() {
  return <Bloom invitation={demoInvitation} />;
}

export default Invitation;
