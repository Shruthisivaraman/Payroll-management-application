import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("EMPLOYEE");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo auth (later backend will replace this)
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("role", role);

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Payroll System Login
        </h2>

        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-sm font-medium">
            Select Role
          </label>

          <select
            className="border p-2 w-full mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="PAYROLL_ADMIN">Payroll Admin</option>
            <option value="HR_ADMIN">HR Admin</option>
            <option value="EMPLOYEE">Employee</option>
            <option value="FINANCE">Finance</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">or</div>

        {/* Organization Registration Button */}
        <Link to="/register">
          <button className="border border-blue-600 text-blue-600 w-full py-2 rounded hover:bg-blue-50">
            Register New Organization
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

