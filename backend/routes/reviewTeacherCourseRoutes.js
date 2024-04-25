import express from "express";
import { getTeacherCourseReview } from "../controllers/reviewCourseController.js";

const router = express.Router();

router.route("/:id").get(getTeacherCourseReview);

export default router;
