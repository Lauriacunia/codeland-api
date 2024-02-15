import jwt from "jsonwebtoken";
import CONFIG from "../config/config.js";

const secretKey = CONFIG.JWT_SECRET;
const options = {
  algorithm: "HS256",
};

export const generateToken = (user, minutes) => {
  const payload = {
    sub: user.email, // Utiliza el email como Subject (sub)
    exp: getExpirationDate(minutes),
  };
  return jwt.sign(payload, secretKey, options);
};

export const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secretKey, options);
    if (payload.exp && payload.exp <= getExpirationDate(0)) {
      // si la fecha de exp es menor a la fecha actual
      return null; // Token expirado
    }
    return payload.sub; // Devuelve el email del usuario
  } catch (error) {
    console.log("Error verifying token => ", error.message);
    return null; // Token inválido
  }
};

export function getExpirationDate(minutes) {
  const expirationDate = new Date();
  expirationDate.setMinutes(expirationDate.getMinutes() + minutes);
  // Devuelve el timestamp en segundos
  return Math.floor(expirationDate / 1000);
}
