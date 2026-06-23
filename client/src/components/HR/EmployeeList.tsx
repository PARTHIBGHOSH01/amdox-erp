import { useEffect, useState } from "react";
import { getEmployees } from "../../services/hrService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-white">
          Employee Management
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white">
          + Add Employee
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="pb-4">ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-white">

            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-slate-800"
              >
                <td className="py-4">{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td
                  className={
                    emp.status === "Active"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }
                >
                  {emp.status}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default EmployeeList;