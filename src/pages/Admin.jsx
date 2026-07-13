import { useState } from "react";
import { useTranslation } from "react-i18next";

import api from "../api/axios";
import Dashboard from "../components/Dashboard";

function Admin() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      window.location.reload();
    } catch {
      alert(t("admin.invalidLogin"));
    }
  };

  if (!localStorage.getItem("token")) {
    return (
      <div className="admin-login">
        <div className="admin-login__card">
          <h1>{t("admin.title")}</h1>

          <input
            placeholder={t("admin.username")}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder={t("admin.password")}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>{t("admin.login")}</button>
        </div>
      </div>
    );
  }

  return <Dashboard />;
}

export default Admin;
