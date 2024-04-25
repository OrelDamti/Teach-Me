import mongoose from "mongoose";

const enrolledStudentSchema = mongoose.Schema(
  {
    teacherCourseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "TeacherCourses",
    },
    enrolledUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isEnded: {
      type: Boolean,
      default: false,
    },
    slot: {
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
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
    slot_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
const EnrolledStudent = mongoose.model(
  "EnrolledStudent",
  enrolledStudentSchema
);

export default EnrolledStudent;
