import PostCard from "../components/PostCard.jsx";
import UserCard from "../components/UserCard.jsx";

const mockPosts = [
  {
    id: 1,
    author: { name: "Aarav Sharma", username: "aarav", avatar: "https://i.pravatar.cc/150?img=12" },
    content: "Just launched my new portfolio! Built with React + Vite. What do you think? 🚀 #webdev #reactjs",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    likes: 124,
    comments: 18,
    time: "2h ago",
  },
  {
    id: 2,
    author: { name: "Priya Verma", username: "priya.v", avatar: "https://i.pravatar.cc/150?img=5" },
    content: "Sunset at Marine Drive today. Mumbai never fails to amaze! 🌅",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    likes: 89,
    comments: 7,
    time: "5h ago",
  },
  {
    id: 3,
    author: { name: "Dev Community", username: "dev", avatar: "https://i.pravatar.cc/150?img=8" },
    content: "Tip: Keep your Express server setup minimal at first. Add routes/controllers/services step by step. Clean architecture > premature optimization.",
    image: "",
    likes: 210,
    comments: 32,
    time: "1d ago",
  },
];

const suggestedUsers = [
  { name: "Rahul Gupta", username: "rahul_g", avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "Sara Khan", username: "sara.k", avatar: "https://i.pravatar.cc/150?img=9" },
];

export default function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem", alignItems: "start" }}>
      {/* Feed */}
      <div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1.2rem", marginBottom: "1.2rem" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>Welcome to SocialSphere 👋</h1>
          <p style={{ color: "#64748b" }}>
            A minimal social media starter — React frontend is live, Express server is running on port 5000.
            Backend APIs will be added next.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}>
            <span style={{ background: "#eff6ff", color: "#2563eb", padding: "0.3rem 0.7rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>✓ Frontend ready</span>
            <span style={{ background: "#f0fdf4", color: "#16a34a", padding: "0.3rem 0.7rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>✓ Server running</span>
            <span style={{ background: "#fefce8", color: "#ca8a04", padding: "0.3rem 0.7rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600 }}>○ APIs pending</span>
          </div>
        </div>

        <h3 style={{ marginBottom: "0.8rem", color: "#334155" }}>Your Feed</h3>
        {mockPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      {/* Sidebar */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1rem" }}>
          <h4 style={{ marginBottom: "0.8rem" }}>Suggested for you</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {suggestedUsers.map((u) => (
              <UserCard key={u.username} user={u} />
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderRadius: "16px", padding: "1.2rem" }}>
          <h4>Start sharing</h4>
          <p style={{ fontSize: "0.9rem", opacity: 0.9, margin: "0.4rem 0 0.9rem" }}>Create your first post and see it on the feed.</p>
          <a href="/create" style={{ background: "#fff", color: "#2563eb", padding: "0.5rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.9rem" }}>+ New Post</a>
        </div>
      </div>
    </div>
  );
}
