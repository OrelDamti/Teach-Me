import mongoose from "mongoose";
const timeSlotSchema = mongoose.Schema({
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  slot_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});
const teacherCoursesSchema = mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    isTeaching: {
      type: Boolean,
      default: true,
    },
    slots: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },
        timeSlots: [timeSlotSchema],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TeacherCourses = mongoose.model("TeacherCourses", teacherCoursesSchema);

export default TeacherCourses;
