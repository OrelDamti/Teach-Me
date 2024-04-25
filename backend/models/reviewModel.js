import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    teacherCourseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "TeacherCourses",
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    comment: { type: String, required: true },
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model("Review", reviewSchema);

export default Review;
