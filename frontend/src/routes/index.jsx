import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import { AuthLayout, MainLayout } from "../layouts";
import {
  About,
  Contact,
  Course,
  EditCourse,
  Login,
  Register,
  SingleCourse,
  Teachers,
  UpcomingLesson,
  UpdateProfile,
  User,
} from "../pages";
import { RolesRoutes } from "../roles/routes";
import { roles } from "../roles";
import { useSelector } from "react-redux";

export default function Routes() {
  const { user } = useSelector((state) => state.auth);
  const PublicRoutes = [
    {
      path: "/",
      element: <PublicRoute Component={MainLayout} />,
      children: [
        { index: true, element: <Course /> },
        { path: "course/:id", element: <SingleCourse /> },
      ],
    },
    {
      path: "/login",
      element: <PublicRoute Component={AuthLayout} />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/register",
      element: <PublicRoute Component={AuthLayout} />,
      children: [
        {
          path: "student",
          element: <Register />,
        },
        {
          path: "teacher",
          element: <Register isTeacher />,
        },
      ],
    },
    {
      path: "about",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <About />,
        },
      ],
    },
    // {
    //   path: "contact",
    //   element: <MainLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <Contact />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const getRolesRoutes = () => {
    if (user?.role === roles.student) {
      return RolesRoutes.student;
    }
    if (user?.role === roles.teacher) {
      return RolesRoutes.teacher;
    }
    if (user?.role === roles.admin) {
      return RolesRoutes.admin;
    }
    return RolesRoutes.publicReturnRoutes;
  };
  let routes = [];

  const rolesRoutes = getRolesRoutes();
  if (Array.isArray(rolesRoutes)) {
    routes.push(...rolesRoutes);
  }

  routes.push(...PublicRoutes);
  // console.log(routes, "routes");

  return useRoutes(
    // {
    //   path: "/login",
    //   element: <PublicRoute Component={AuthLayout} />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Login />,
    //     },
    //   ],
    // },
    // {
    //   path: "/register",
    //   element: <PublicRoute Component={AuthLayout} />,
    //   children: [
    //     {
    //       path: "student",
    //       element: <Register />,
    //     },
    //     {
    //       path: "teacher",
    //       element: <Register isTeacher />,
    //     },
    //   ],
    // },
    // {
    //   path: "/",
    //   element: <PublicRoute Component={MainLayout} />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Teachers />,
    //     },
    //     { path: "course", element: <Course /> }, // Define Course component route
    //     { path: "course/:id", element: <SingleCourse /> }, // Define SingleCourse component route
    //     { path: "about", element: <About /> },
    //     { path: "contact", element: <Contact /> },
    //     // Redirect to SingleCourse page when clicking on a course card
    //     { path: "teachers", element: <Navigate to="/course" replace /> },
    //     { path: "profile/:id", element: <UpdateProfile /> },
    //     { path: "edit-course/:id", element: <EditCourse /> },
    //     { path: "users", element: <User /> },
    //   ],
    // },
    routes
  );
}
