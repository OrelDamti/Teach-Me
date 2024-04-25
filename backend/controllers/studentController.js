import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Student from '../models/studentModel.js'
import User from '../models/userModel.js'

// @desc Fetch all students
// @route GET /api/students
// @access Public
const getAllStudents = asyncHandler(async(req, res) =>{
    const student =  await Student.find({})
    res.json(student)
})

// @desc Fetch syngle student
// @route GET /api/student/:id
// @access Public
const getStudentById = asyncHandler(async(req, res) =>{
    const studentId = await Student.findById(req.params.id).populate('user','name email role')
    if (studentId){
        res.json(studentId)
    }else{
        res.status(404)
        throw new Error('Student Not Found')
    }
})

// @desc Register a new user
// @route POST /api/students
// @access Public
const registerStudent = asyncHandler(async (req, res) => {
    const { name, email, password, studentId, studentDepartment, phone } = req.body;
    if(!name || !email || !password ||  !studentId || !studentDepartment || !phone ) {
        res.status(400);
        throw new Error('Incomplete data');
    }
    // Create or find the User first
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({
            name,
            email,
            password
        });
    }
    else{
        res.status(404)
        throw new Error('Student is exist')
    }
    
    // Check if studentId already exists to avoid duplication
    const studentExists = await Student.findOne({ studentId });
    if (studentExists) {
        res.status(400);
        throw new Error('StudentID already exists');
    }

    // Now create the Student with reference to the User
    const student = await Student.create({
        user: user._id,
        studentId: studentId,
        studentDepartment: studentDepartment,
        phone: phone
    });

    if (student) {
        res.status(201).json({
            _id: student._id,
            name: user.name,
            email: user.email,
            studentId: student.studentId,
            studentDepartment: student.studentDepartment,
            phone: student.phone,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid student data');
    }
});


export{
    getAllStudents,
    getStudentById,
    registerStudent,
}