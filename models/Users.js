import { Schema, models, model } from "mongoose";
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["m", "f", "d"],
  },
  activity: {
    type: String,
    enum: ["a", "b", "c", "d"],
  },
});

export default models.User || model("User", schema);
