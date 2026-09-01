import { Route, Routes } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import AdmissionForm from "../features/admission/pages/AdmissionForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admission-form" element={<AdmissionForm />} />
    </Routes>
  );
};

export default AppRoutes;