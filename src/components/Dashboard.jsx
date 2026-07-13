import { useState } from "react";
import api from "../api/axios";

function Dashboard() {
  const [form, setForm] = useState({
    template: "la-maison-doree",
    groom: "",
    bride: "",
    date: "",
    time: "", // Qo'shildi
    location: "",
    venue: "", // Qo'shildi (To'yxona nomi)
    address: "", // Qo'shildi (Manzil)
    map: "", // Qo'shildi (Google Maps link)
  });
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const createInvitation = async () => {
    if (!form.groom || !form.bride) {
      alert("Iltimos, kelin va kuyov ismini kiriting!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/invitations", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Backenddan kelgan slug orqali link yaratish
      setLink(`http://localhost:5173/invitation/${res.data.slug}`);
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Taklifnoma yaratishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>

      <div>
        <h1>Dashboard</h1>

        <label>Shablonni tanlang:</label>
        <select
          value={form.template}
          onChange={(e) => setForm({ ...form, template: e.target.value })}
        >
          <option value="la-maison-doree">La Maison Dorée</option>
          <option value="day-and-night">Day and Night</option>
          <option value="bloom">Bloom</option>
          <option value="royal">Royal</option>
        </select>

        <input
          placeholder="Kuyovning ismi"
          value={form.groom}
          onChange={(e) => setForm({ ...form, groom: e.target.value })}
        />

        <input
          placeholder="Kelinning ismi"
          value={form.bride}
          onChange={(e) => setForm({ ...form, bride: e.target.value })}
        />

        <input
          placeholder="Sana (masalan: 2026-08-25)"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Vaqt (masalan: 18:00)"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <input
          placeholder="To'yxona nomi"
          value={form.venue}
          onChange={(e) => setForm({ ...form, venue: e.target.value })}
        />

        <input
          placeholder="To'liq manzil"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          placeholder="Google Maps Linki"
          value={form.map}
          onChange={(e) => setForm({ ...form, map: e.target.value })}
        />

        <button onClick={createInvitation} disabled={loading}>
          {loading ? "Yaratilmoqda..." : "Yaratish"}
        </button>
      </div>

      {link && (
        <div className="generated-link" style={{ marginTop: "20px" }}>
          <input value={link} readOnly style={{ width: "300px" }} />
          <button onClick={() => navigator.clipboard.writeText(link)}>
            Copy
          </button>
        </div>
      )}
    </>
  );
}

export default Dashboard;
