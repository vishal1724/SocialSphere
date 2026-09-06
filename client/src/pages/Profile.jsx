import PostCard from "../components/PostCard.jsx";

export default function Profile() {
  const mockPost = {
    author: { name: "Your Name", username: "you", avatar: "https://i.pravatar.cc/150?img=3" },
    content: "This is how your profile posts will look. Backend will fetch real posts soon!",
    image: "",
    likes: 0,
    comments: 0,
    time: "just now",
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", marginBottom: "1.2rem" }}>
        <div style={{ height: 120, background: "linear-gradient(135deg,#2563eb,#7c3aed)" }} />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <img src="https://i.pravatar.cc/150?img=3" alt="avatar" style={{ width: 84, height: 84, borderRadius: "50%", border: "4px solid #fff", marginTop: -42 }} />
          <h2 style={{ marginTop: "0.6rem" }}>Your Name</h2>
          <p style={{ color: "#64748b" }}>@you · Joined Sep 2026</p>
          <p style={{ marginTop: "0.6rem", color: "#334155" }}>Bio will be editable here. Followers, following, and posts counts will come from MongoDB.</p>
          <div style={{ display: "flex", gap: "1.2rem", marginTop: "0.9rem", fontSize: "0.9rem" }}>
            <span><b>0</b> Posts</span>
            <span><b>0</b> Followers</span>
            <span><b>0</b> Following</span>
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: "0.8rem" }}>Posts</h3>
      <PostCard post={mockPost} />
    </div>
  );
}
