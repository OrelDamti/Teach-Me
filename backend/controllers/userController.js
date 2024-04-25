import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import os from "os";
import EnrolledStudent from "../models/enrolledStudentModel.js";
import TeacherCourses from "../models/teacherCoursesModel.js";

const platform = os.platform();

// @desc Fetch all users
// @route GET /api/users
// @access Public
const getAllUser = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.status(200).json(user);
});

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Incomplete data");
  }
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  let uesrToupdateID;
  uesrToupdateID = req.user._id;
  if (req.user.role === "admin") {
    uesrToupdateID = req.params.id;
  }
  const user = await User.findById(uesrToupdateID);
  if (user) {
    user.name = req.body.name || user.name;
    if (req?.body?.email && req?.body?.email !== user.email) {
      // Check if the new email is already in use by another user
      const existingUser = await User.findOne({ email: req.body.email });
      //console.log("existingUser : ", existingUser);

      /*console.log(
        existingUser &&
          existingUser._id.toString() !== userIdToUpdate.toString()
      );*/
      if (
        existingUser &&
        existingUser._id.toString() !== userIdToUpdate.toString()
      ) {
        res.status(400);
        throw new Error("Email is already in use");
      }

      // If not in use, update the email
      user.email = req.body.email;
    }

    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Register a new student
// @route POST /api/users/register/student
// @access Public
const registerStudent = asyncHandler(async (req, res) => {
  const { name, email, password, studentId, studentDepartment, phone } =
    req.body;
  if (
    !name ||
    !email ||
    !password ||
    !studentId ||
    !studentDepartment ||
    !phone
  ) {
    res.status(400);
    throw new Error("Incomplete data");
  }
  // Check if the email already exists
  const userExists = await User.findOne({ email });
  const studentIdExist = await Student.findOne({ studentId });
  if (studentIdExist) {
    res.status(400);
    throw new Error("Student Id must be unique");
  }
  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  // Create a new user if email doesn't exist
  const user = await User.create({
    name,
    email,
    password, // Password hashing is handled in the User model's pre-save middleware
  });

  if (user) {
    // Link the Student record with the User record via user field
    const student = await Student.create({
      user: user._id,
      studentId,
      studentDepartment,
      phone,
    });

    if (student) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid student data");
    }
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Register a new teacher
// @route   POST /api/users/register/teacher
// @access  Public
const registerTeacher = asyncHandler(async (req, res) => {
  const { name, email, password, teacherId, teacherDepartment, phone } =
    req.body;

  if (!req.file) {
    res.status(400);
    throw new Error("No file provided");
  }
  if (
    !name ||
    !email ||
    !password ||
    !teacherId ||
    !teacherDepartment ||
    !phone
  ) {
    res.status(400);
    throw new Error("Incomplete data");
  }
  const filePath = req?.file?.path;
  let fileNameAfterUploads = "";
  if (filePath) {
    let parts = "";
    if (platform.includes("linux")) {
      parts = filePath.split("/uploads/");
    } else {
      parts = filePath.split("\\uploads\\");
    }
    fileNameAfterUploads = parts.length > 1 ? "/uploads/" + parts[1] : null;
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User email already exists");
  }

  const teacherExists = await Teacher.findOne({ teacherId: teacherId });

  if (teacherExists) {
    res.status(400);
    throw new Error("TeacherID already exists");
  }

  const user = await User.create({
    picture: fileNameAfterUploads,
    name: name,
    email: email,
    password: password,
    role: "teacher",
  });

  const teacher = await Teacher.create({
    user: user._id,
    teacherId: teacherId,
    teacherDepartment: teacherDepartment,
    phone: phone,
    picture: fileNameAfterUploads,
  });

  if (user && teacher) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      picture: teacher.picture,
      /*studentId:teacher.studentId,
              studentDepartment:teacher.studentDepartment,
              phone:teacher.phone,
              role: user.role,*/
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid teacher data");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  if (req.user.role !== "admin") {
    res.status(400);
    throw new Error("You are not allowed");
  }
  const userId = req.params.id;

  const userToDelete = await User.findById(userId);
  if (!userToDelete) {
    return res.status(404).json({ message: "User not found" });
  }
  if (userToDelete?.role === "student") {
    const deleteEnrolledCourses = await EnrolledStudent.deleteMany({
      enrolledUserId: userId,
    });
  } else if (userToDelete?.role === "teacher") {
    const deleteEnrolledCoursesa = await EnrolledStudent.deleteMany({
      enrolledUserId: userId,
    });
    const deleteEnrolledCourses = await EnrolledStudent.deleteMany({
      teacherId: userId,
    });
    const deleteAllTeacherCourse = await TeacherCourses.deleteMany({
      teacherId: userId,
    });
  }
  const deletedUser = await User.findByIdAndDelete(userId);

  return res.json({ message: "User deleted successfully", deletedUser });
});
export {
  authUser,
  getUserProfile,
  registerUser,
  getAllUser,
  registerStudent,
  registerTeacher,
  updateUserProfile,
  deleteUser,
};
