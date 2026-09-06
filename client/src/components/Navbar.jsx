import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const navStyle = {
  background: "#fff",
  borderBottom: "1px solid #e2e8f0",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const innerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0.9rem 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const linkStyle = (active) => ({
  padding: "0.4rem 0.8rem",
  borderRadius: "8px",
  fontWeight: active ? 700 : 500,
  background: active ? "#eff6ff" : "transparent",
  color: active ? "#2563eb" : "#334155",
});

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <Link to="/" style={{ fontWeight: 800, fontSize: "1.4rem", color: "#2563eb", letterSpacing: "-0.02em" }}>
          SocialSphere
        </Link>

        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          <Link to="/" style={linkStyle(pathname === "/")}>Home</Link>
          {user ? (
            <>
              <Link to="/create" style={linkStyle(pathname === "/create")}>Create</Link>
              <Link to="/profile" style={linkStyle(pathname === "/profile")}>{user.username}</Link>
              <button onClick={handleLogout} style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "0.45rem 0.9rem", borderRadius: "8px", fontWeight: 600, color: "#334155" }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ ...linkStyle(pathname === "/login"), border: "1px solid #e2e8f0" }}>Login</Link>
              <Link to="/register" style={{ background: "#2563eb", color: "#fff", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 600 }}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
