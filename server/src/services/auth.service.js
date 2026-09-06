import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

const sanitizeUser = (user) => {
  const obj = user.toObject ? user.toObject() : user;
  delete obj.password;
  delete obj.__v;
  return obj;
};

export const register = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    const err = new Error("Username, email and password are required");
    err.statusCode = 400;
    throw err;
  }

  const existing = await User.findOne({ $or: [{ email }, { username }] });
  if (existing) {
    const err = new Error(existing.email === email ? "Email already in use" : "Username already taken");
    err.statusCode = 409;
    throw err;
  }

  const hashed = await hashPassword(password);
  const user = await User.create({ username, email, password: hashed });

  const token = generateToken({ id: user._id });

  return { user: sanitizeUser(user), token };
};

export const login = async ({ email, password }) => {
  if (!email || !password) {
    const err = new Error("Email and password are required");
    err.statusCode = 400;
    throw err;
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const token = generateToken({ id: user._id });

  return { user: sanitizeUser(user), token };
};

export const getMe = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }
  return sanitizeUser(user);
};
