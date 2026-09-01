
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages/HomePage";
import CoursePage from "../features/courses/pages/CoursePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/courses" element={<CoursePage />} />
    </Routes>
  );
};

export default AppRoutes;