import { AuthLayout, MainLayout } from "../../layouts";
import {
  Course,
  Courses,
  CreateCourse,
  EditCourse,
  Faculty,
  Feedback,
  Schedule,
  SingleCourse,
  TeacherCourses,
  UpcomingLesson,
  UpdateProfile,
  User,
} from "../../pages";
import PrivateRoute from "../../routes/private-route";
import { roles } from "../index";

const StudentRoutes = [
  {
    path: "/",
    element: <PrivateRoute navLink="/schedule" Component={MainLayout} />,
    children: [
      {
        index: true,
        element: <Course />,
      },
      { path: "schedule/:id", element: <Schedule /> },
      { path: "feedback/:id", element: <Feedback /> },
      { path: "course/:id", element: <SingleCourse /> },
      { path: "profile", element: <UpdateProfile /> },
      { path: "upcoming-lesson", element: <UpcomingLesson /> },
    ],
  },
];

const TeacherRoutes = [
  {
    path: "/",
    element: <PrivateRoute navLink="/" Component={MainLayout} />,
    children: [
      {
        index: true,
        element: <Course isTeacher={true} />,
      },
      { path: "teacher-feedback/:id", element: <Feedback isTeacher={true} /> },
      { path: "create-course/:id", element: <CreateCourse /> },
      { path: "update-course/:id", element: <CreateCourse isUpdate={true} /> },
      { path: "courses", element: <TeacherCourses isUpdate={true} /> },
      { path: "profile", element: <UpdateProfile /> },
      { path: "upcoming-lesson", element: <UpcomingLesson isTeacher={true} /> },
    ],
  },
];

const AdminRoutes = [
  {
    path: "/",
    element: <PrivateRoute Component={MainLayout} />,
    children: [
      {
        index: true,
        element: <User />,
      },
      { path: "profile", element: <UpdateProfile /> },
      { path: "courses", element: <Courses /> },
      { path: "faculty", element: <Faculty /> },
      { path: "new-course", element: <EditCourse isAdd={true} /> },
      { path: "edit-course/:id", element: <EditCourse /> },
    ],
  },
];
const publicReturnRoutes = {
  path: "/",
  element: <PrivateRoute navLink="/login" component={AuthLayout} />,
};

export const RolesRoutes = {
  [roles.student]: StudentRoutes,
  [roles.teacher]: TeacherRoutes,
  [roles.admin]: AdminRoutes,
  publicReturnRoutes,
};
