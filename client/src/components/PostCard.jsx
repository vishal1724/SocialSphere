const card = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "1.2rem",
  marginBottom: "1rem",
};

export default function PostCard({ post }) {
  const { author, content, image, likes, comments, time } = post;

  return (
    <div style={card}>
      <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.8rem" }}>
        <img
          src={author.avatar}
          alt={author.name}
          style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{author.name}</div>
          <div style={{ color: "#64748b", fontSize: "0.8rem" }}>@{author.username} · {time}</div>
        </div>
        <span style={{ marginLeft: "auto", background: "#f1f5f9", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.75rem" }}>Public</span>
      </div>

      <p style={{ marginBottom: image ? "0.9rem" : "0.6rem", color: "#334155" }}>{content}</p>

      {image && (
        <img src={image} alt="post" style={{ width: "100%", borderRadius: "12px", maxHeight: 360, objectFit: "cover", marginBottom: "0.9rem" }} />
      )}

      <div style={{ display: "flex", gap: "1.2rem", color: "#64748b", fontSize: "0.9rem", borderTop: "1px solid #f1f5f9", paddingTop: "0.8rem" }}>
        <span>❤️ {likes} likes</span>
        <span>💬 {comments} comments</span>
        <span style={{ marginLeft: "auto", cursor: "pointer" }}>↗ Share</span>
      </div>
    </div>
  );
}
