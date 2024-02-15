import MongoStore from "connect-mongo";
import session from "express-session";
import CONFIG from "./config.js";

const sessionConfig = session({
  secret: CONFIG.SECRET,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://${CONFIG.MONGO_USER}:${CONFIG.MONGO_PASS}@cluster0.cyfup.mongodb.net/${CONFIG.DB_NAME}?retryWrites=true&w=majority`,
    ttl: 60 * 10, // 10 minutes
  }),
});

export { sessionConfig };
