export default function CreatePost() {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1.5rem" }}>
      <h2 style={{ marginBottom: "0.4rem" }}>Create Post</h2>
      <p style={{ color: "#64748b", marginBottom: "1.2rem" }}>Share something with your followers</p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <textarea
          placeholder="What's on your mind?"
          rows={4}
          style={{ padding: "0.9rem", borderRadius: "12px", border: "1px solid #e2e8f0", fontFamily: "inherit", resize: "vertical" }}
        />
        <input type="file" accept="image/*" style={{ fontSize: "0.9rem" }} />
        <button style={{ background: "#2563eb", color: "#fff", border: "none", padding: "0.8rem", borderRadius: "10px", fontWeight: 700 }}>
          Post
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "0.8rem", fontSize: "0.8rem", color: "#94a3b8" }}>UI only — will POST to /api/posts later</p>
    </div>
  );
}
