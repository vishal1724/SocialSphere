import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem" }}>
      <h2 style={{ marginBottom: "0.4rem" }}>Welcome back</h2>
      <p style={{ color: "#64748b", marginBottom: "1.4rem" }}>Login to continue to SocialSphere</p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <input placeholder="Email" type="email" style={input} />
        <input placeholder="Password" type="password" style={input} />
        <button style={btn}>Login</button>
      </form>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem", color: "#64748b" }}>
        No account? <Link to="/register" style={{ color: "#2563eb", fontWeight: 600 }}>Create one</Link>
      </p>
      <p style={{ textAlign: "center", marginTop: "0.6rem", fontSize: "0.8rem", color: "#94a3b8" }}>UI only — auth API will be wired later</p>
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
};
