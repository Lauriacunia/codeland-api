import { verifyToken } from "../services/jwt.service.js";

export const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1]; // remove "Bearer" from token
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const email = verifyToken(token);
  if (!email) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  next();
};
