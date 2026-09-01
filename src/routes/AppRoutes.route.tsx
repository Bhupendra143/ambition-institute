import { Route, Routes } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import AdmissionForm from "../features/admission/pages/AdmissionForm";
import CoursePage from "../features/courses/pages/CoursePage";
import { NotFound } from "../components/NotFound";
import AboutPage from "../features/about/pages/AboutPage";
import ContactPage from "../features/contact/pages/ContactPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admission-form" element={<AdmissionForm />} />

      <Route path="/courses" element={<CoursePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;