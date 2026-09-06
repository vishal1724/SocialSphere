export default function Comment({ comment }) {
  return (
    <div style={{ display: "flex", gap: "0.7rem", padding: "0.7rem 0", borderBottom: "1px solid #f1f5f9" }}>
      <img src={comment.avatar} alt={comment.author} style={{ width: 32, height: 32, borderRadius: "50%" }} />
      <div style={{ background: "#f8fafc", padding: "0.6rem 0.9rem", borderRadius: "12px", flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>{comment.author}</div>
        <div style={{ fontSize: "0.9rem", color: "#334155" }}>{comment.text}</div>
      </div>
    </div>
  );
}
