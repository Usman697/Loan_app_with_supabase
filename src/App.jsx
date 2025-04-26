import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
