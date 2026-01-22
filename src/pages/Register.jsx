import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Organization registered successfully!");
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Organization Registration
        </h2>

        <form onSubmit={handleRegister}>
          <input
            className="border p-2 w-full mb-3"
            placeholder="Organization Name"
            required
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Admin Email"
            type="email"
            required
          />

          <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Register Organization
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

