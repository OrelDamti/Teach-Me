import express from 'express'
const router = express.Router()
import { getAllTeachers , getTeacherById , registerTeacher} from '../controllers/teacherController.js'


router.route('/').get(getAllTeachers)
router.route('/:id').get(getTeacherById)
router.route('/').post(registerTeacher) // not using

export default router