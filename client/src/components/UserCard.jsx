export default function UserCard({ user }) {
  return (
    <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.9rem" }}>
      <img src={user.avatar} alt={user.name} style={{ width: 44, height: 44, borderRadius: "50%" }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{user.name}</div>
        <div style={{ color: "#64748b", fontSize: "0.8rem" }}>@{user.username}</div>
      </div>
      <button style={{ background: "#2563eb", color: "#fff", border: "none", padding: "0.45rem 0.9rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.85rem" }}>
        Follow
      </button>
    </div>
  );
}
