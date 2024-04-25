import Course from "../models/courseModel.js";
import asyncHandler from "express-async-handler";
import os from "os";
import TeacherCourses from "../models/teacherCoursesModel.js";
import EnrolledStudent from "../models/enrolledStudentModel.js";

const platform = os.platform();

// @desc Fetch all courses
// @route GET /api/courses
// @access Public
const getCourse = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const courses = await Course.find({ ...keyword });
  res.json(courses);
});

// @desc Fetch syngle course
// @route GET /api/courses/:id
// @access Public
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error("Course Not Found");
  }
});

// @desc Update a course
// @route PUT /api/courses/:id
// @access Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
  if (req.user.role !== "admin") {
    res.status(401);
    throw new Error("Only admin can create course");
  }

  const course = await Course.findById(req.params.id);

  if (course) {
    course.name = req?.body?.name || course.name;
    course.description = req?.body?.description || course.description;
    course.faculty = req?.body?.faculty || course.faculty;

    if (req?.file) {
      const filePath = req?.file?.path;

      if (filePath) {
        let parts = "";
        if (platform.includes("linux")) {
          parts = filePath.split("/uploads/");
        } else {
          parts = filePath.split("\\uploads\\");
        }
        course.image = parts.length > 1 ? "/uploads/" + parts[1] : null;
      }
    }
    const updateCourse = await course.save();
    res.json(updateCourse);
  } else {
    res.status(404);
    throw new Error("Course Not found");
  }
});

// @desc Create a new reviews
// @route POST /api/courses/:id/reviews
// @access Private
const createCourseReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const course = await Course.findById(req.params.id);

  if (course) {
    const alreadyReviewed = course.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Course already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    course.reviews.push(review);

    course.newReviews = course.reviews.length;

    course.rating =
      course.reviews.reduce((acc, item) => item.rating + acc, 0) /
      course.reviews.length;

    await course.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Course Not found");
  }
});

const createCourse = asyncHandler(async (req, res) => {
  if (req.user.role !== "admin") {
    res.status(401);
    throw new Error("Only admin can create course");
  }
  const { name, description, faculty } = req.body;
  if (!req.file) {
    res.status(400);
    throw new Error("No file provided");
  }
  if (!name || !description || !faculty) {
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
    // console.log(filePath, "filePath");
    // console.log(platform, "platform");
    // console.log(parts, "parts");
    fileNameAfterUploads = parts.length > 1 ? "/uploads/" + parts[1] : null;
    // console.log(fileNameAfterUploads, "fileNameAfterUploads");
  }

  const courses = await Course.create({
    name,
    image: fileNameAfterUploads,
    faculty,
    description,
  });
  res.json(courses);
});

const deleteCourse = asyncHandler(async (req, res) => {
  if (req.user.role !== "admin") {
    res.status(400);
    throw new Error("You are not allowed");
  }
  const courseId = req.params.id;
  const courseToDelete = await Course.findById(courseId);
  //console.log({courseToDelete})
  if (!courseToDelete) {
    return res.status(404).json({ message: "Course not found" });
  }
  await TeacherCourses.deleteMany({ courseId });
  await EnrolledStudent.deleteMany({ courseId });

  const deletedCourse = await Course.findByIdAndDelete(courseId);

  return res.json({ message: "Course deleted successfully", deletedCourse });
});

export {
  getCourse,
  getCourseById,
  updateCourse,
  createCourseReview,
  createCourse,
  deleteCourse,
};
