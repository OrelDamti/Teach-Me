import express from "express";
const router = express.Router();
import {
  authUser,
  getAllUser,
  getUserProfile,
  registerStudent,
  registerTeacher,
  registerUser,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../utils/uploadHelper.js";

router.route("/").get(getAllUser);
router.route("/").post(registerUser);
router.route("/register/student").post(registerStudent);
router.route("/register/teacher").post(upload.single("image"), registerTeacher);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/profile/:id").put(protect, updateUserProfile);
router.route("/:id").delete(protect, deleteUser);

export default router;
