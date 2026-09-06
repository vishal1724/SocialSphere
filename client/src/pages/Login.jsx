import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const { login, error, setError } = useAuth();
  const navigate = useNavigate();
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    setError?.(null);
    if (!form.email || !form.password) {
      setLocalError("Email and password are required");
      return;
    }
    setSubmitting(true);
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setLocalError(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  const errMsg = localError || error?.message || error;

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem" }}>
      <h2 style={{ marginBottom: "0.4rem" }}>Welcome back</h2>
      <p style={{ color: "#64748b", marginBottom: "1.4rem" }}>Login to continue to SocialSphere</p>

      {errMsg && <div style={{ background: "#fef2f2", color: "#dc2626", padding: "0.6rem 0.9rem", borderRadius: "10px", marginBottom: "1rem", fontSize: "0.9rem" }}>{String(errMsg)}</div>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={input}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={input}
          required
        />
        <button style={btn} disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem", color: "#64748b" }}>
        No account? <Link to="/register" style={{ color: "#2563eb", fontWeight: 600 }}>Create one</Link>
      </p>
    </div>
  );
}

const input = {
  padding: "0.7rem 0.9rem",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  fontSize: "0.95rem",
  outline: "none",
};

const btn = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "0.75rem",
  borderRadius: "10px",
  fontWeight: 700,
  fontSize: "1rem",
  marginTop: "0.4rem",
  opacity: 1,
};
