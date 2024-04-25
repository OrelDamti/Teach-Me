import asyncHandler from "express-async-handler";
import TeacherCourses from "../models/teacherCoursesModel.js";
import Review from "../models/reviewModel.js";
import EnrolledStudent from "../models/enrolledStudentModel.js";

// @desc    Add review to course
// @route   POST /api/review/addReviewToCourse
// @access  Private
const addReviewToCourse = asyncHandler(async (req, res) => {
  const reviewerId = req.user._id;
  const { teacherCourseId, rating, comment } = req.body;

  if (!teacherCourseId || !rating || !comment) {
    res.status(404);
    throw new Error("Incomplete data");
  }
  const isCourseExist = await TeacherCourses.findById(teacherCourseId);
  if (!isCourseExist) {
    res.status(404);
    throw new Error("Course not found");
  }

  const isStudentEnrolled = await EnrolledStudent.findOne({
    teacherCourseId,
    enrolledUserId: reviewerId,
  });

  if (!isStudentEnrolled) {
    res.status(404);
    throw new Error("Can not review to unenrolled course");
  }

  const isReviewExist = await Review.findOne({
    teacherCourseId,
    reviewerId,
  });
  if (isReviewExist) {
    res.status(404);
    throw new Error("Multiple reviews not allowed");
  }

  const review = await Review.create({
    teacherCourseId,
    rating,
    comment,
    reviewerId,
  });

  res.status(201).json(review);
});

// @desc    Get review of course
// @route   GET /api/review/getCourseReview/:id
// @access  Private
const getCourseReview = asyncHandler(async (req, res) => {
  const review = await Review.find({
    teacherCourseId : req.params.id,
  }).populate("reviewerId","name email");

  res.status(200).json(review);
})

const getTeacherCourseReview = asyncHandler(async (req, res) => {
  console.log("getTeacherCourseReview=>", req.params.id);
  const review = await Review.find({
    teacherCourseId : req.params.id,
  }).populate("reviewerId","name email");

  res.status(200).json(review);
})

export { addReviewToCourse, getCourseReview, getTeacherCourseReview };
