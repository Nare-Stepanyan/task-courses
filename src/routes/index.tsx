import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Courses = lazy(() => import("pages/courses"));
const CompletedCourses = lazy(() => import("pages/completed"));
const Profile = lazy(() => import("pages/profile"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route path="/completed-courses" element={<CompletedCourses />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
