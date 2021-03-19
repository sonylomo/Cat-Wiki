import mongoose from "mongoose";

const searchSchema = mongoose.Schema([
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
]);

export default mongoose.model("CatSearch", searchSchema);
