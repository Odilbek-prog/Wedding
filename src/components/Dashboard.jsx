import { useState } from "react";
import api from "../api/axios";

function Dashboard() {
  const [form, setForm] = useState({
    template: "la-maison-doree",
    groom: "",
    bride: "",
    date: "",
    location: "",
  });
  const [link, setLink] = useState("");

  const createInvitation = async () => {
    const token = localStorage.getItem("token");

    const res = await api.post("/invitations", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setLink(`http://localhost:5173/invitation/${res.data.slug}`);
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
        <select
          value={form.template}
          onChange={(e) =>
            setForm({
              ...form,
              template: e.target.value,
            })
          }
        >
          <option value="la-maison-doree">La Maison Dorée</option>
          <option value="teatro">Teatro</option>
          <option value="majestic">Majestic</option>
          <option value="boho">Boho</option>
          <option value="royal">Royal</option>
        </select>

        <input
          placeholder="Kuyov"
          onChange={(e) => setForm({ ...form, groom: e.target.value })}
        />

        <input
          placeholder="Kelin"
          onChange={(e) => setForm({ ...form, bride: e.target.value })}
        />

        <input
          placeholder="Sana"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Joy"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <button onClick={createInvitation}>Yaratish</button>
      </div>
      {link && (
        <div className="generated-link">
          <input value={link} readOnly />

          <button onClick={() => navigator.clipboard.writeText(link)}>
            Copy
          </button>
        </div>
      )}
    </>
  );
}

export default Dashboard;
