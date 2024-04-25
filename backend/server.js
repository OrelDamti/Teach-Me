import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import morgan from "morgan";
import connectDB from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import teacherCourseRoutes from "./routes/teacherCourseRoutes.js";
import enrollCourseRoutes from "./routes/enrollCourseRoutes.js";
import reviewCourseRoutes from "./routes/reviewCourseRoutes.js";
import reviewTeacherCourseRoutes from "./routes/reviewTeacherCourseRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import cors from "cors";
import * as url from "url";
import { contactUs } from "./controllers/enrollCourseController.js";

const basePath = url.fileURLToPath(import.meta.url);

dotenv.config();

connectDB();

const app = express();
// Express middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors({ origin: `*` }));
// Allow requests from any origin
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
}));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/*app.get("/", (req, res) => {
  res.send("API is running........");
});*/

app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/teacher-Course", teacherCourseRoutes);
app.use("/api/enroll-Course", enrollCourseRoutes);
app.use("/api/review-Course", reviewCourseRoutes);
app.use("/api/review-teacher-course", reviewTeacherCourseRoutes);
app.use("/api/faculty", facultyRoutes);
app.post("/api/contact", contactUs );

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(basePath, "../", "/uploads"))); //making the uploads folder static
// console.log("__dirname=>", __dirname)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend" , "dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist" , "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running........");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server runnnning in ${process.env.NODE_ENV} mode on port -  ${PORT}`.yellow
      .bold
  )
);
