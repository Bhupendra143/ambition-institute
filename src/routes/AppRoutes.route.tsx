import { Route, Routes } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import AdmissionForm from "../features/admission/pages/AdmissionForm";
import CoursePage from "../features/courses/pages/CoursePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admission-form" element={<AdmissionForm />} />

      <Route path="/courses" element={<CoursePage />} />
    </Routes>
  );
};

export default AppRoutes;