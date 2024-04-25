import express from 'express'
const router = express.Router()
import { getAllStudents , getStudentById, registerStudent} from '../controllers/studentController.js'


router.route('/').get(getAllStudents)
router.route('/:id').get(getStudentById)
router.route('/').post(registerStudent) // not using

export default router