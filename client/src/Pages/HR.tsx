import EmployeeList from "../components/HR/EmployeeList";
import EmployeeForm from "../components/HR/EmployeeForm";
const HR = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold text-white">
        👥 Human Resources
      </h1>

      <p className="text-slate-400">
        Manage employees, attendance and payroll.
      </p>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-8 mb-8 shadow-2xl">

  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative z-10 flex justify-between items-center">

    <div>
      <p className="uppercase tracking-widest text-sm text-white/80 mb-2">
        Human Resource Management
      </p>

      <h2 className="text-4xl font-extrabold text-white">
        Manage Your Workforce 👥
      </h2>

      <p className="text-white/90 mt-3 max-w-xl">
        Track employees, attendance, leave requests and payroll
        from one centralized HR platform.
      </p>

      <button className="mt-5 bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
        ➕ Add Employee
      </button>
    </div>

    <div className="hidden lg:block text-8xl">
      👨‍💼
    </div>

  </div>

</div>

      {/* KPI Cards */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">



  {/* New Hires */}

  <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl hover:-translate-y-1 transition-all">



    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>



    <div className="relative z-10">

      <p className="text-slate-400 text-sm uppercase tracking-wider">

        👨‍💼 New Hires

      </p>



      <h2 className="text-4xl font-bold text-white mt-3">

        24

      </h2>



      <div className="flex justify-between mt-4">

        <span className="text-green-400 font-medium">

          ↑ 15%

        </span>



        <span className="text-slate-500 text-sm">

          This Month

        </span>

      </div>



      <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">

        <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>

      </div>

    </div>

  </div>

  



  {/* Resignations */}

  <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl hover:-translate-y-1 transition-all">



    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>



    <div className="relative z-10">

      <p className="text-slate-400 text-sm uppercase tracking-wider">

        📄 Resignations

      </p>



      <h2 className="text-4xl font-bold text-white mt-3">

        3

      </h2>



      <div className="flex justify-between mt-4">

        <span className="text-red-400 font-medium">

          ↓ 2%

        </span>



        <span className="text-slate-500 text-sm">

          This Month

        </span>

      </div>



      <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">

        <div className="h-full w-1/4 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"></div>

      </div>

    </div>

  </div>
     <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl hover:-translate-y-1 transition-all">

  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

  <div className="relative z-10">

    <p className="text-slate-400 text-sm uppercase tracking-wider">
      🎯 Open Positions
    </p>

    <h2 className="text-4xl font-bold text-white mt-3">
      12
    </h2>

    <div className="flex justify-between mt-4">
      <span className="text-blue-400 font-medium">
        Active
      </span>

      <span className="text-slate-500 text-sm">
        Hiring
      </span>
    </div>

    <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full w-3/5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
    </div>

  </div>

</div>

  {/* Attendance Overview */}
  <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

    <h2 className="text-2xl font-bold text-white mb-6">
      📊 Attendance Overview
    </h2>

    <div className="space-y-4">

      <div>
        <div className="flex justify-between text-white mb-2">
          <span>Present</span>
          <span>96%</span>
        </div>

        <div className="h-3 bg-slate-800 rounded-full">
          <div className="h-3 w-[96%] bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-white mb-2">
          <span>On Leave</span>
          <span>3%</span>
        </div>

        <div className="h-3 bg-slate-800 rounded-full">
          <div className="h-3 w-[3%] bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-white mb-2">
          <span>Absent</span>
          <span>1%</span>
        </div>

        <div className="h-3 bg-slate-800 rounded-full">
          <div className="h-3 w-[1%] bg-red-500 rounded-full"></div>
        </div>
      </div>

    </div>

  </div>

  {/* Payroll Status */}
 <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative z-10"></div>

    <h2 className="text-2xl font-bold text-white mb-6">
      💰 Payroll Status
    </h2>

    <div className="space-y-5">

      <div className="flex justify-between">
        <span className="text-slate-400">
          Total Payroll
        </span>

        <span className="text-green-400 font-bold">
          ₹24.8L
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Processed
        </span>

        <span className="text-green-400 font-bold">
          98%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Pending
        </span>

        <span className="text-yellow-400 font-bold">
          2%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">
          Last Processed
        </span>

        <span className="text-white">
          18 Jun 2026
        </span>
      </div>

    </div>

  </div>

</div>
    {/* Employee Actions */}
<div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">

  <input
    type="text"
    placeholder="🔍 Search employees..."
    className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 w-full md:w-80"
  />

  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
    Export Employees
  </button>

</div>

<EmployeeForm />

<div className="mt-6">
  <EmployeeList />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative z-10"></div>
          <h3 className="text-slate-400">Employees</h3>
          <p className="text-4xl font-bold text-white mt-2">1245</p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative z-10"></div>
          <h3 className="text-slate-400">Attendance</h3>
          <p className="text-4xl font-bold text-green-400 mt-2">96%</p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative z-10"></div>
          <h3 className="text-slate-400">Leave Requests</h3>
          <p className="text-4xl font-bold text-yellow-400 mt-2">18</p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-1₀ transition duration-5₀₀"></div>

  <div className="relative z-1₀"></div>
          <h3 className="text-slate-400">Payroll</h3>
          <p className="text-4xl font-bold text-blue-400 mt-2">Processed</p>
        </div>

      </div>
    </div>
    </div>

  );
}

export default HR;