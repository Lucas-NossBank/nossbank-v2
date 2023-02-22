import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";


const RoutesMain = () => (
  <Routes>
    <Route path="/index" element={<HomePage />} />
    {/* <Route path="/login" element={<LoginPage />} />
    <Route path="/login/dashboardAdm" element={<DashboardAdmPage />} /> */}
    <Route path="*" element={<Navigate to="/index" />} />
  </Routes>
);

export default RoutesMain;