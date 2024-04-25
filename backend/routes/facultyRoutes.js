import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getAllFaculty, addFaculty , deleteFaculty , getAllFacultyAdmin} from "../controllers/facultyController.js";

const router = express.Router();

router.route("/").get(getAllFaculty);
router.route("/admin").get(protect , getAllFacultyAdmin);
router.route("/").post(protect, addFaculty);
router.route("/:id").delete(protect, deleteFaculty);


export default router;
