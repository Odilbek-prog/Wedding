import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

// Hamma shablonlarni import qilamiz
import LaMaisonDoree from "../templates/LaMaisonDoree/LaMaisonDoree";
import DayAndNight from "../templates/DayAndNight/DayAndNight";
import Bloom from "../templates/Bloom/Bloom";
import Royal from "../templates/Royal/Royal";
import Bridgerton from "../templates/Bridgerton/Bridgerton";

function Invitation() {
  const { slug } = useParams(); // URL'dagi slug'ni ushlab oladi
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getInvitationData = async () => {
      try {
        const res = await api.get(`/invitations/${slug}`);
        setInvitation(res.data);
      } catch (err) {
        console.error("Taklifnomani yuklashda xatolik:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getInvitationData();
  }, [slug]);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>Yuklanmoqda...</div>
    );
  if (error || !invitation)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Taklifnoma topilmadi!
      </div>
    );

  // Backenddan kelgan template nomiga qarab kerakli shablonni render qilamiz
  switch (invitation.template) {
    case "la-maison-doree":
      return <LaMaisonDoree invitation={invitation} />;
    case "day-and-night":
      return <DayAndNight invitation={invitation} />;
    case "bloom":
      return <Bloom invitation={invitation} />;
    case "royal":
      return <Royal invitation={invitation} />;
    case "bridgerton":
      return <Bridgerton invitation={invitation} />;
    default:
      // Agar shablon topilmasa, standart holatda bittasini ko'rsatadi
      return <LaMaisonDoree invitation={invitation} />;
  }
}

export default Invitation;
