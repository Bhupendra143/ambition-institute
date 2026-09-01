
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages/HomePage";
import CoursePage from "../features/courses/pages/CoursePage";
import AboutPage from "../features/about/pages/AboutPage";
import ContactPage from "../features/contact/pages/ContactPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;