import mongoose from "mongoose";

const facultySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["DEAN", "VC", "VF", "DIRECTOR", "LECTURER"],
    },
  },
  {
    timestamps: true,
  }
);
const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;
