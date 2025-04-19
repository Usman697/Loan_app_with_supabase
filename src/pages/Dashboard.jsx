import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import LoanRequests from "../components/LoanRequests";
import CreateLoanForm from "../components/CreateLoanForm";
import Profile from "../components/Profile";
import LogoutButton from "../components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      
      <aside className="w-64 h-full bg-white border-r p-6 flex flex-col shadow-md">
        <Sidebar />
      </aside>

      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/loan-requests" element={<LoanRequests />} />
          <Route path="/create-loan" element={<CreateLoanForm />} />
          <Route path="/profile" element={<Profile />} />
           {/* <Route path="/AfterCreateLoan" element={<AfterCreateLoan />} /> */}
          <Route path="/logout" element={<LogoutButton />} />
        </Routes>
      </main>

    </div>
  );
}
