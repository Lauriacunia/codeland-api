import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  technologies: {
    type: [String],
  },
  demo: {
    type: String,
  },
  documentation: {
    type: String,
  },
  design: {
    type: String,
  },
  repository: {
    type: String,
  },
  tags: {
    type: [String],
  },
  created_at: {
    type: Date,
  },
});

export default model("projects", projectSchema);
