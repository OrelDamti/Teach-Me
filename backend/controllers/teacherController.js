import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Teacher from '../models/teacherModel.js'

// @desc Fetch all teachers
// @route GET /api/teachers
// @access Public
const getAllTeachers = asyncHandler(async(req, res) =>{
    const teacher =  await Teacher.find({}).populate("user","name")
    res.json(teacher)
})

// @desc Fetch syngle teacher
// @route GET /api/teacher/:id
// @access Public
const getTeacherById = asyncHandler(async(req, res) =>{
    const teacherId = await Teacher.findById(req.params.id).populate('user','name email role')
    if (teacherId){
        res.json(teacherId)
    }else{
        res.status(404)
        throw new Error('Teacher Not Found')
    }
})

// @desc Register a new teacher
// @route POST /api/teachers
// @access Public
const registerTeacher = asyncHandler(async(req, res) =>{
    const { name , email , password ,teacherId,teacherDepartment,course,price,grade,phone} = req.body

    const teacherExists = await Teacher.findOne({email})

    if (teacherExists){
        res.status(400)
        throw new Error('Teacher already exist')
    }

    const teacher = await Teacher.create({
        name,
        email,
        password,
        teacherId,
        teacherDepartment,
        course,
        price,
        grade,
        phone
    })

    if (teacher){
        res.status(201).json({
            _id:teacher._id,
            name: teacher.name,
            email: teacher.email,
            studentId:teacher.studentId,
            studentDepartment:teacher.studentDepartment,
            phone:teacher.phone,
            isAdmin: teacher.isAdmin,
            token : generateToken(teacher._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid teacher data')
    }
})

export{
    getAllTeachers,
    getTeacherById,
    registerTeacher,

}