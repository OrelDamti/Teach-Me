import express from "express";
import {
  createTeacherCourse,
  updateTeacherCourse,
  updateCourseTeachingStatus,
  getTeacherAllCourses,
  getTeacherCoursewithId,
  getAllTeacherofCourse
} from "../controllers/teacherCourseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTeacherAllCourses); // reviews dekhne wrt student
router.route("/:id").get(getTeacherCoursewithId); // reviews dekhne wrt student
router.route("/").post(protect, createTeacherCourse);
router.route("/update").post(protect, updateTeacherCourse);
router.route("/status").post(protect, updateCourseTeachingStatus); // not using
router.route("/course/:id").get(getAllTeacherofCourse);

export default router;
