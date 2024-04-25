import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import TeacherCourses from "../models/teacherCoursesModel.js";
import mongoose from "mongoose";
import EnrolledStudent from "../models/enrolledStudentModel.js";

const createTeacherCourse = asyncHandler(async (req, res) => {

  if (req?.user?.role !== "teacher") {
    res.status(400);
    throw new Error("This is only for teacher");
  }

  const { courseId, price, grade, slots } = req.body;

  if (grade && grade < 85) {
    res.status(400);
    throw new Error("Your grade must be grater");
  }

  if (price && price > 100) {
    res.status(400);
    throw new Error("Price must be less than 100");
  }

  const existCourse = await Course.findById(courseId || "");
  if (!existCourse || !courseId) {
    res.status(400);
    throw new Error("CourseID is invalid");
  }

  const isTeacherCoursesExist = await TeacherCourses.findOne({
    courseId: existCourse._id,
    teacherId: req.user._id,
  });

  if (isTeacherCoursesExist) {
    res.status(400);
    throw new Error("course already created");
  }

  // Create a new TeacherCourses instance
  const newTeacherCourse = new TeacherCourses({
    courseId: existCourse._id,
    price,
    slots,
    teacherId: req.user._id,
  });

  // Save the new TeacherCourses instance to the database
  const savedTeacherCourse = await newTeacherCourse.save();

  res.status(201).json(savedTeacherCourse);
});

const updateTeacherCourse = asyncHandler(async (req, res) => {
  if (req?.user?.role !== "teacher") {
    res.status(400);
    throw new Error("This is only for teacher");
  }

  const { courseId, price, slots } = req.body;
// console.log("teacher update=>", courseId, price, slots);
  if (price && price > 100) {
    res.status(400);
    throw new Error("Price must be less than 100");
  }
  const existTeacherCourse = await TeacherCourses.findOne({
    teacherId: req.user._id,
    courseId,
  }).exec();
  if (!existTeacherCourse || !courseId) {
    res.status(400);
    throw new Error("CourseId is invalid");
  }
  /*console.log({
    existTeacherCourse,
    price,
    slots,
  });*/
  // Create a new TeacherCourses instance
  existTeacherCourse.price = price;
  existTeacherCourse.slots = slots;

  const updation = await existTeacherCourse.save();

  res.status(201).json(updation);
});
const updateCourseTeachingStatus = asyncHandler(async (req, res) => {
  if (req?.user?.role !== "teacher") {
    res.status(400);
    throw new Error("This is only for teacher");
  }

  const { teacherCourseId } = req.body;
  if (!teacherCourseId) {
    res.status(400);
    throw new Error("teacherCourseId is invalid");
  }
  const existingTeacherCourse = await TeacherCourses.findOne({
    _id: teacherCourseId,
    teacherId: req.user._id,
  }).exec();
  if (!existingTeacherCourse) {
    res.status(400);
    throw new Error("existing TeacherCourse not found");
  }

  existingTeacherCourse.isTeaching = !existingTeacherCourse.isTeaching;
  const updation = await existingTeacherCourse.save();
  await EnrolledStudent.updateMany(
    { teacherCourseId: teacherCourseId },
    { isActive: existingTeacherCourse.isTeaching }
  );
  res.status(201).json(updation);
});

const getTeacherAllCourses = asyncHandler(async (req, res) => {
  //console.log(req?.user);

  if (req?.user?.role !== "teacher") {
    res.status(400);
    throw new Error("This is only for teacher");
  }
  const aggregateResult = await TeacherCourses.aggregate([
    {
      $match: {
        teacherId: req?.user?._id,
      },
    },
    {
      $lookup: {
        from: "courses",
        localField: "courseId",
        foreignField: "_id",
        as: "populatedCourses",
      },
    },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "teacherCourseId",
        as: "allReviews",
      },
    },
    {
      $unwind: {
        path: "$allReviews",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: {
          teacherId: "$teacherId",
          courseId: "$_id",
        },
        teacherCourses: { $first: "$$ROOT" },
        totalReviews: { $sum: 1 },
        sumRating: { $sum: "$allReviews.rating" },
      },
    },
    {
      $group: {
        _id: "$_id.teacherId",
        teacherCourses: {
          $push: {
            course: "$$ROOT.teacherCourses",
            averageRating: {
              $cond: {
                if: { $eq: ["$totalReviews", 0] },
                then: 0,
                else: { $divide: ["$sumRating", "$totalReviews"] },
              },
            },
          },
        },
      },
    },
  ]);

  if (!aggregateResult?.length) {
    res.status(400);
    throw new Error("No data found in db");
  }

  res.status(200).json(aggregateResult[0]);
});

const getTeacherCoursewithId = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const mongoId = new mongoose.Types.ObjectId(id);

  const existTeacherCourses = await TeacherCourses.findById(id).exec();

  if (!existTeacherCourses) {
    res.status(404);
    throw new Error("Teacher course not found");
  }
  const aggregateResult = await TeacherCourses.aggregate([
    {
      $match: {
        _id: mongoId,
      },
    },
    {
      $lookup: {
        from: "courses",
        localField: "courseId",
        foreignField: "_id",
        as: "populatedCourses",
      },
    },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "teacherCourseId",
        as: "allReviews",
      },
    },
    {
      $unwind: {
        path: "$allReviews",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: "$_id",
        teacherCourses: { $first: "$$ROOT" },
        totalReviews: { $sum: 1 },
        sumRating: { $sum: "$allReviews.rating" },
      },
    },
    {
      $group: {
        _id: "$_id.teacherId",
        teacherCourses: {
          $push: {
            course: "$$ROOT.teacherCourses",
            averageRating: {
              $cond: {
                if: { $eq: ["$totalReviews", 0] },
                then: 0,
                else: { $divide: ["$sumRating", "$totalReviews"] },
              },
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        "teacherCourses.course.allReviews": 0,
      },
    },
  ]);

  if (!aggregateResult?.length) {
    res.status(400);
    throw new Error("No data found in db");
  }

  res.status(200).json(aggregateResult[0]);
});

const getAllTeacherofCourse = asyncHandler(async (req, res) => {
  const courseId = req.params.id;
  const allCourses = await TeacherCourses.find({
    courseId,
    isTeaching: true,
  }).populate("teacherId", "name email picture");
  res.status(200).json(allCourses);
});

export {
  createTeacherCourse,
  updateTeacherCourse,
  updateCourseTeachingStatus,
  getTeacherAllCourses,
  getTeacherCoursewithId,
  getAllTeacherofCourse,
};
