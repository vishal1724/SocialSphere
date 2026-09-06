import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    if (!form.username || !form.email || !form.password) {
      setLocalError("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }
    setSubmitting(true);
    try {
      const { confirmPassword, ...payload } = form;
      await register(payload);
      navigate("/");
    } catch (err) {
      setLocalError(err.response?.data?.message || err.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem" }}>
      <h2 style={{ marginBottom: "0.4rem" }}>Create account</h2>
      <p style={{ color: "#64748b", marginBottom: "1.4rem" }}>Join SocialSphere today</p>

      {localError && <div style={{ background: "#fef2f2", color: "#dc2626", padding: "0.6rem 0.9rem", borderRadius: "10px", marginBottom: "1rem", fontSize: "0.9rem" }}>{localError}</div>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <input placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} style={input} required />
        <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={input} required />
        <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={input} required />
        <input placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} style={input} required />
        <button style={btn} disabled={submitting}>
          {submitting ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem", color: "#64748b" }}>
        Already have an account? <Link to="/login" style={{ color: "#2563eb", fontWeight: 600 }}>Login</Link>
      </p>
    </div>
  );
}

const input = {
  padding: "0.7rem 0.9rem",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  fontSize: "0.95rem",
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
};
