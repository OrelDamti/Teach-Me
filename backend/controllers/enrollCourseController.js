import asyncHandler from "express-async-handler";
import TeacherCourses from "../models/teacherCoursesModel.js";
import mongoose from "mongoose";
import EnrolledStudent from "../models/enrolledStudentModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import Course from "../models/courseModel.js";
import Teachers from "../models/teacherModel.js";
import Student from "../models/studentModel.js";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Update with your SMTP server hostname
  port: 587, // Update with your SMTP server port
  auth: {
    user: process.env.BREVOEMAIL,
    pass: process.env.BREVOSMTPKEY,
  },
});

const EmailSender = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.BREVOEMAIL, // Your email address
    to,
    subject,
    text,
  };

  const info = await transporter.sendMail(mailOptions);
  //console.log("info", info);
};

function formatTime(timeString) {
  // Simply remove the milliseconds and 'Z' from the string
  return timeString.substring(0, timeString.length - 8);
}

// @desc    Enroll course
// @route   POST /api/enrollCourse
// @access  Private
const enrollCourse = asyncHandler(async (req, res) => {
  //console.log("enroll course :");

  const { teacherCourseId, slotId } = req.body;
  const slotMongoID = new mongoose.Types.ObjectId(slotId);
  if (!teacherCourseId) {
    res.status(400);
    throw new Error("teacherCourseId is required");
  }
  const isteacherCourseIdExist = await TeacherCourses.findById(teacherCourseId)
    .populate("teacherId courseId")
    .exec();
  if (!isteacherCourseIdExist) {
    res.status(400);
    throw new Error("teacherCourse is not exist");
  }
  if (!isteacherCourseIdExist.isTeaching) {
    res.status(400);
    throw new Error("Teacher is not training");
  }

  let slot = isteacherCourseIdExist.slots
    .map((item) => {
      const timeSlot = item.timeSlots.find((nestedItem) =>
        nestedItem._id.equals(slotMongoID)
      );
      return timeSlot ? { day: item.day, ...timeSlot.toObject() } : null;
    })
    .find(Boolean);
  if (!slot) {
    res.status(400);
    throw new Error("slot not found");
  }

  const studentEmail = req.user.email;
  const studentName = req.user.name;
  // console.log("studentName" , studentName)
  const teacherEmail = isteacherCourseIdExist.teacherId.email;
  const teacherName = isteacherCourseIdExist.teacherId.name;
  // console.log("teacherName" , teacherName)
   const courseName = isteacherCourseIdExist.courseId.name;
  //console.log("teacherCourseId" , teacherCourseId , "isteacherCourseIdExist" , isteacherCourseIdExist)
  // console.log("object" , isteacherCourseIdExist.teacherId._id)
  const teachers = await Teachers.findOne({ user: isteacherCourseIdExist.teacherId._id });
  // console.log("phoneTeacher" , teachers.phone)
  const phoneTeacher = teachers.phone;
  const studentId = req.user._id;
  const student = await Student.findOne({ user:studentId});
  const phoneStudent = student.phone;
  // console.log("phoneStudent" , phoneStudent)

  const studentMessage = `Hello ${studentName},\n
  You got enrolled in Course - ${courseName} with Teacher ${teacherName} his number to contact him ${phoneTeacher}.\n
  Your class is scheduled on ${slot.day} at ${formatTime(slot.startTime)} to ${formatTime(slot.endTime)}.\n
  Thank you for enrolling in our course.\n
  Regards,\n
  TeachMe Team`;
  const teacherMessage = `Hello ${teacherName},\n
  You got enrolled in Course - ${courseName}, with Student ${studentName} his number to contact him ${phoneStudent}.\n
  Your class is scheduled on ${slot.day} at ${formatTime(slot.startTime)} to ${formatTime(slot.endTime)}.\n
  Thank you for enrolling in our course.\n
  Regards,\n
  TeachMe Team`;

  const isStudentEnrolled = await EnrolledStudent.findOne({
    enrolledUserId: req.user._id,
    teacherCourseId: teacherCourseId,
    isActive: true,
  });
  if (isStudentEnrolled) {
    res.status(400);
    throw new Error("student already enrolled");
  }
  const enrollcourse = await EnrolledStudent({
    enrolledUserId: req.user._id,
    teacherCourseId: teacherCourseId,
    slot,
    teacherId: isteacherCourseIdExist.teacherId,
    courseId: isteacherCourseIdExist.courseId,
    slot_id: slotMongoID,
    isActive: true
  });
  const updation = await enrollcourse.save();
  await EmailSender(
    studentEmail,
    "Coursed enrolled notification",
    studentMessage
  );
  await EmailSender(
    teacherEmail,
    "Coursed enrolled notification",
    teacherMessage
  );
  res.status(201).json(updation);
});

// @desc    Get active enrolled course
// @route   GET /api/enrollCourse/getActiveEnrollCourse
// @access  Private
const getActiveEnrollCourse = asyncHandler(async (req, res) => {
  const enrollcourse = await EnrolledStudent.find({
    enrolledUserId: req.user._id,
    isEnded: false,
    isActive: true,
  }).populate({
    path: "teacherCourseId",
    populate: {
      path: "courseId",
      model: "Course",
    },
  });
  if (enrollcourse?.length) {
    const result = {};
    // Loop through each entry in the inputData
    enrollcourse.forEach((entry) => {
      const day = entry.slot.day;
      // If the day is not in the result object, create an array for it
      if (!result[day]) {
        result[day] = [];
      }
      // Push the entry to the array for the corresponding day
      result[day].push(entry);
    });
    // Convert the result object into an array
    const outputArray = Object.entries(result).map(([day, entries]) => ({
      day,
      entries,
    }));
    res.status(200).json(outputArray);
  } else {
    res.status(200).json(enrollcourse);
  }
});

// @desc    Get teacher upcoming lesson
// @route   GET /api/enrollCourse/getTeacherUpcomingLesson
// @access  Private
const getTeacherUpcomingLesson = asyncHandler(async (req, res) => {
  const enrollcourse = await EnrolledStudent.find({
    teacherId: req.user._id,
    isEnded: false,
    isActive: true,
  }).populate({
    path: "teacherCourseId",
    populate: {
      path: "courseId",
      model: "Course",
    },
  });
  //console.log(enrollcourse,"enrollCourse")
  if (enrollcourse?.length) {
    const result = {};

    // Loop through each entry in the inputData
    enrollcourse.forEach((entry) => {
      const day = entry.slot.day;
      // If the day is not in the result object, create an array for it
      if (!result[day]) {
        result[day] = [];
      }
      // Push the entry to the array for the corresponding day
      result[day].push(entry);
    });
    // Convert the result object into an array
    const outputArray = Object.entries(result).map(([day, entries]) => ({
      day,
      entries,
    }));
    res.status(200).json(outputArray);
  } else {
    res.status(200).json(enrollcourse);
  }
});

// @desc    Update status of enrolled course
// @route   POST /api/enrollCourse/updateStatusofEnrollCourse
// @access  Private
const updateStatusofEnrollCourse = asyncHandler(async (req, res) => {
  const { teacherCourseId, slot_id } = req.body;
  const teacherId = req.user._id;
  const enrolledStudent = await EnrolledStudent.find({
    teacherCourseId,
    teacherId,
    slot_id,
  })
    .populate("enrolledUserId", "email")
    .populate("courseId", "name");

  if (!enrolledStudent.length) {
    res.status(400);
    throw new Error("teacherCourseId is invalid");
  }

  let emails = " ";
  enrolledStudent.map((item, indx) => {
    //console.log(item?.enrolledUserId);
    emails += `${item?.enrolledUserId?.email} ${
      indx < enrolledStudent.length - 1 ? ", " : ""
    }`;
  });

  const updateResult = await EnrolledStudent.updateMany(
    { teacherCourseId },
    { $set: { isActive: false }}
  );
  // if (isActive === false) {

  await EmailSender(
    emails,
    "Class cancellation",
    `${enrolledStudent?.[0]?.courseId?.name} class has been canceled for ${enrolledStudent?.[0]?.slot?.day}`
  );
  // }
  return res.json({ message: "Enrolled courses updated successfully" });
});

// @desc    Student class cancel
// @route   POST /api/enrollCourse/studentClassCancel
// @access  Private
const StudenClassCancel = asyncHandler(async (req, res) => {
  //console.log("in StudenClassCancel");
  const { teacherCourseId, slot_id } = req.body;
  const studentName = req.user.name;
  // console.log("studentName" , studentName)
  // console.log("teacherCourseId" , teacherCourseId)
  const teacherCourses = await TeacherCourses.findById(teacherCourseId);
  const users = await User.findById(teacherCourses.teacherId);
  const teacherName= users.name;
  const courses = await Course.findById(teacherCourses.courseId);
  const courseName = courses.name;
  // console.log("courseName" , courseName)
  const enrolledStudent = await EnrolledStudent.find({
    teacherCourseId,
    slot_id,
    enrolledUserId: req.user._id,
  })
    .populate("teacherId", "email")
    .populate("enrolledUserId", "name email");
  //console.log(enrolledStudent, "enrolledStudent");
  if (!enrolledStudent.length) {
    res.status(400);
    throw new Error("course not found");
  }
  const updateStatus = await EnrolledStudent.updateMany({
    teacherCourseId,
    slot_id,
    enrolledUserId: req.user._id,
  }, { $set: { isActive: false } });

  //const courseName = enrolledStudent?.[0]?.courseId?.name;
  await EmailSender(
    enrolledStudent?.[0]?.teacherId?.email,
    "Class cancellation",
    `Hello ${teacherName},\n
    The lesson in Course -  ${courseName} was canceled by ${enrolledStudent?.[0]?.enrolledUserId?.name} on the ${enrolledStudent?.[0]?.slot?.day} and ${formatTime(enrolledStudent?.[0]?.slot?.startTime)} to ${formatTime(enrolledStudent?.[0]?.slot?.endTime)}.\n
    Regards,\n
    TeachMe Team`
  );

  await EmailSender(
    req.user.email,
    "Class cancellation",
    `Hello ${studentName},\n
    The Course -  ${courseName} you were enrolled to him canceled by you.\n
    we would love to see you with us in the future.\n
    Regards,\n
    TeachMe Team`
  );

  return res.json({ message: "Notificaton Email sended to the teacher" });
});

// @desc    Contact us
// @route   POST /api/enrollCourse/contactUs
// @access  Public
const contactUs = asyncHandler(async (req, res) => {
  const { email, name, description } = req.body;
  if (!email || !name || !description) {
    res.status(400);
    throw new Error("Incomplete Data");
  }
  await EmailSender(email, `${name} reached out on our web`, description);
  return res.json({ message: "Form submitted succesfuly" });
});
export {
  enrollCourse,
  getActiveEnrollCourse,
  getTeacherUpcomingLesson,
  updateStatusofEnrollCourse,
  StudenClassCancel,
  contactUs,
};
