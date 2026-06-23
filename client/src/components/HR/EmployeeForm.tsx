import { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    status: "Active",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(employee);

    alert("Employee Added Successfully");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        ➕ Add Employee
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >

        <input
          type="text"
          placeholder="Employee Name"
          className="bg-slate-800 text-white p-3 rounded-xl"
          onChange={(e) =>
            setEmployee({
              ...employee,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Department"
          className="bg-slate-800 text-white p-3 rounded-xl"
          onChange={(e) =>
            setEmployee({
              ...employee,
              department: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          Add Employee
        </button>

      </form>

    </div>
  );
};

export default EmployeeForm;