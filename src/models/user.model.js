import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const usersSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

usersSchema.plugin(passportLocalMongoose, { usernameField: "email" });

export default model("users", usersSchema);
