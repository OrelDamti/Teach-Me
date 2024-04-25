import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  enrollCourse,
  getActiveEnrollCourse,
  getTeacherUpcomingLesson,
  updateStatusofEnrollCourse,
  StudenClassCancel,
} from "../controllers/enrollCourseController.js";
const router = express.Router();

router.route("/").post(protect, enrollCourse);
router.route("/").get(protect, getActiveEnrollCourse);
router.route("/teacher").get(protect, getTeacherUpcomingLesson);
router.route("/course").post(protect, updateStatusofEnrollCourse);
router.route("/student").post(protect, StudenClassCancel);

export default router;
