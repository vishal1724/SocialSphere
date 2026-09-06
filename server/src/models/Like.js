import mongoose from "mongoose";

// TODO: Define Like schema - placeholder (optional if you store likes inside Post)
const likeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);
export default Like;
