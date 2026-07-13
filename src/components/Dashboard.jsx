import { useState } from "react";
import api from "../api/axios";

function Dashboard() {
  const [form, setForm] = useState({
    template: "la-maison-doree",
    groom: "",
    bride: "",
    date: "",
    time: "",
    location: "",
    venue: "",
    address: "",
    map: "",
  });

  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  // Parol o'zgartirish uchun state'lar
  const [newPassword, setNewPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

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

      // Localhost o'rniga dinamik domen (Vercel uchun ham ishlaydi)
      const currentDomain = window.location.origin;
      setLink(`${currentDomain}/invitation/${res.data.slug}`);
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Taklifnoma yaratishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  // Parolni almashtirish funksiyasi
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    try {
      const res = await api.post("/admin/change-password", { newPassword });
      setPasswordMessage(res.data.message);
      setNewPassword("");
      setTimeout(() => setPasswordMessage(""), 3000);
    } catch (error) {
      setPasswordMessage(error.response?.data?.message || "Xatolik yuz berdi");
      setTimeout(() => setPasswordMessage(""), 3000);
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          style={{
            padding: "8px 15px",
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          marginBottom: "40px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2>Taklifnoma Yaratish</h2>

        <div style={{ display: "grid", gap: "10px" }}>
          <label>Shablonni tanlang:</label>
          <select
            value={form.template}
            onChange={(e) => setForm({ ...form, template: e.target.value })}
            style={{ padding: "8px" }}
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
            style={{ padding: "8px" }}
          />

          <input
            placeholder="Kelinning ismi"
            value={form.bride}
            onChange={(e) => setForm({ ...form, bride: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder="Sana (masalan: 2026-08-25)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder="Vaqt (masalan: 18:00)"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder="To'yxona nomi"
            value={form.venue}
            onChange={(e) => setForm({ ...form, venue: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder="To'liq manzil"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder="Google Maps Linki"
            value={form.map}
            onChange={(e) => setForm({ ...form, map: e.target.value })}
            style={{ padding: "8px" }}
          />

          <button
            onClick={createInvitation}
            disabled={loading}
            style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}
          >
            {loading ? "Yaratilmoqda..." : "Yaratish"}
          </button>
        </div>

        {link && (
          <div
            className="generated-link"
            style={{ marginTop: "20px", display: "flex", gap: "10px" }}
          >
            <input value={link} readOnly style={{ flex: 1, padding: "8px" }} />
            <button
              onClick={() => navigator.clipboard.writeText(link)}
              style={{ padding: "8px 15px", cursor: "pointer" }}
            >
              Copy
            </button>
          </div>
        )}
      </div>

      {/* Yangi qism: Parolni almashtirish */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>Admin Parolini O'zgartirish</h2>
        <form
          onSubmit={handlePasswordChange}
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="Yangi parolni kiriting (min 5 ta belgi)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={5}
            style={{ flex: 1, padding: "8px" }}
          />
          <button
            type="submit"
            disabled={passwordLoading}
            style={{ padding: "8px 15px", cursor: "pointer" }}
          >
            {passwordLoading ? "Saqlanmoqda..." : "Saqlash"}
          </button>
        </form>
        {passwordMessage && (
          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: passwordMessage.includes("xatolik") ? "red" : "green",
            }}
          >
            {passwordMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
