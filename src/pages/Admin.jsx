import { useState } from "react";
import api from "../api/axios";
import Dashboard from "../components/Dashboard";

function Admin() {
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
      alert("Login yoki parol noto'g'ri");
    }
  };

  if (!localStorage.getItem("token")) {
    return (
      <div>
        <h1>Admin Login</h1>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    );
  }

  return <Dashboard />;
}

export default Admin;
