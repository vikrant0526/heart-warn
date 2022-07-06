import { Schema, models, model } from "mongoose";

const schema = {
  BPMs: {
    type: [Number],
    required: true,
  },
};

export default models.Simulations || model("Simulations", schema);

// 62c5e8ad662e8ff8696e6dbf
