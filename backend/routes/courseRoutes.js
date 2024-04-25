import express from "express";
const router = express.Router();
import {
  getCourse,
  getCourseById,
  createCourseReview,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { protect /*admin*/ } from "../middleware/authMiddleware.js";
import upload from "../utils/uploadHelper.js";

router
  .route("/")
  .get(getCourse)
  .post(protect, upload.single("image"), createCourse);
router.route("/:id/reviews").post(protect, createCourseReview);
router.route("/:id").get(getCourseById);
router.route("/:id").post(protect, upload.single("image"), updateCourse);
router.route("/:id").delete(protect, deleteCourse);

export default router;
