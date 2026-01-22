import Navbar from "../components/Navbar";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <>
      <Navbar />

      <div className="p-6">
        {role === "EMPLOYEE" && (
          <h2 className="text-xl font-semibold">
            Employee Dashboard – View payslips & tax details
          </h2>
        )}

        {role === "HR_ADMIN" && (
          <h2 className="text-xl font-semibold">
            HR Admin Dashboard – Manage employee payroll profiles
          </h2>
        )}

        {role === "PAYROLL_ADMIN" && (
          <h2 className="text-xl font-semibold">
            Payroll Admin Dashboard – Payroll processing & approvals
          </h2>
        )}

        {role === "SUPER_ADMIN" && (
          <h2 className="text-xl font-semibold">
            Super Admin Dashboard – Organization & statutory configuration
          </h2>
        )}

        {role === "FINANCE" && (
          <h2 className="text-xl font-semibold">
            Finance Dashboard – Reports & audits
          </h2>
        )}
      </div>
    </>
  );
}

export default Dashboard;
