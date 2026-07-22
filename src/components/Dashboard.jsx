import { useState } from "react";
import api from "../api/axios";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
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
  const [file, setFile] = useState(null);

  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  // Parol o'zgartirish uchun state'lar
  const [newPassword, setNewPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  const createInvitation = async () => {
    if (!form.groom || !form.bride) {
      alert(t("dashboard.alertFillNames"));
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("template", form.template);
      formData.append("groom", form.groom);
      formData.append("bride", form.bride);
      formData.append("date", form.date);
      formData.append("time", form.time);
      formData.append("venue", form.venue);
      formData.append("address", form.address);
      formData.append("map", form.map);

      if (file) {
        formData.append("coupleImage", file);
      }

      const res = await api.post("/invitations", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const currentDomain = window.location.origin;

      setLink(`${currentDomain}/invitation/${res.data.slug}`);
    } catch (error) {
      console.error(error);
      alert(t("dashboard.alertCreateError"));
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
        <h1>{t("dashboard.title")}</h1>
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
          {t("dashboard.logout")}
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
        <h2>{t("dashboard.createInvitation")}</h2>

        <div style={{ display: "grid", gap: "10px" }}>
          <label>{t("dashboard.selectTemplate")}</label>
          <select
            value={form.template}
            onChange={(e) => setForm({ ...form, template: e.target.value })}
            style={{ padding: "8px" }}
          >
            <option value="la-maison-doree">La Maison Dorée</option>
            <option value="day-and-night">Day and Night</option>
            <option value="bloom">Bloom</option>
            <option value="royal">Royal</option>
            <option value="bridgerton">Bridgerton</option>
          </select>

          <input
            placeholder={t("dashboard.groom")}
            value={form.groom}
            onChange={(e) => setForm({ ...form, groom: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.bride")}
            value={form.bride}
            onChange={(e) => setForm({ ...form, bride: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.date")}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.time")}
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.venue")}
            value={form.venue}
            onChange={(e) => setForm({ ...form, venue: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.address")}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ padding: "8px" }}
          />

          <input
            placeholder={t("dashboard.map")}
            value={form.map}
            onChange={(e) => setForm({ ...form, map: e.target.value })}
            style={{ padding: "8px" }}
          />
          {form.template === "day-and-night" && (
            <div style={{ display: "grid", gap: "6px" }}>
              <label>{t("dashboard.coupleImage")}</label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <small style={{ color: "#777" }}>
                {t("dashboard.coupleImageHint")}
              </small>
            </div>
          )}

          <button
            onClick={createInvitation}
            disabled={loading}
            style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}
          >
            {loading ? t("dashboard.creating") : t("dashboard.create")}
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
              {t("dashboard.copy")}
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
        <h2>{t("dashboard.changePassword")}</h2>
        <form
          onSubmit={handlePasswordChange}
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder={t("dashboard.newPassword")}
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
            {passwordLoading ? t("dashboard.saving") : t("dashboard.save")}
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
