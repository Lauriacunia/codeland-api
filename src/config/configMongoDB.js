import mongoose from "mongoose";
import "dotenv/config";

const config = {
  mongoDB: {
    URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cyfup.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority `,
  },
};

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoDB.URL);
    console.log("Connected to Mongo Atlas");
  } catch (error) {
    console.log("Error Conect BD Mongo Atlas", error);
  }
};
