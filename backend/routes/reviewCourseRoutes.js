import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addReviewToCourse , getCourseReview } from "../controllers/reviewCourseController.js";

const router = express.Router();

router.route("/").post(protect, addReviewToCourse);
router.route("/:id").get(getCourseReview);

export default router;
