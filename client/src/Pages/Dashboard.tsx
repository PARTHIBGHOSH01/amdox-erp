import MetricCard from "../components/Dashboard/MetricCard";
import RevenueChart from "../components/Dashboard/RevenueChart";
import EmployeeChart from "../components/Dashboard/EmployeeChart";
import RecentActivity from "../components/Dashboard/RecentActivity";
import QuickActions from "../components/Dashboard/QuickActions";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-650">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-10 mb-8 shadow-2xl">

  {/* Background Effects */}
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

    {/* Left Side */}
    <div>

      <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-3">
        Enterprise Resource Platform
      </p>

      <h1 className="text-6xl font-black text-white leading-tight">
        AMX CLOUD ERP
      </h1>

      <h2 className="text-3xl font-bold text-white mt-4">
        Welcome Back, Hakeem 👋
      </h2>

      <p className="text-lg text-white/90 max-w-2xl mt-4">
        Manage employees, finances, projects, inventory and
        business operations from one intelligent cloud platform.
      </p>

      <div className="flex gap-4 mt-8">

        <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          📄 Generate Report
        </button>

        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition">
          📊 View Analytics
        </button>

      </div>

    </div>

    {/* Right Side */}
    <div className="hidden lg:flex items-center justify-center">

      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">

        <h3 className="text-white text-lg font-semibold mb-4">
          Live Overview
        </h3>

        <div className="space-y-4">

          <div>
            <p className="text-white/70 text-sm">
              Total Revenue
            </p>

            <h4 className="text-2xl font-bold text-white">
              ₹12.5L
            </h4>
          </div>

          <div>
            <p className="text-white/70 text-sm">
              Active Projects
            </p>

            <h4 className="text-2xl font-bold text-white">
              48
            </h4>
          </div>

          <div>
            <p className="text-white/70 text-sm">
              Employees
            </p>

            <h4 className="text-2xl font-bold text-white">
              1245
            </h4>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="👥 Employees" value="1245" />
<MetricCard title="💰 Revenue" value="₹12.5L" />
<MetricCard title="🚀 Active Projects" value="48" />
<MetricCard title="📦 Inventory" value="2341" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">
          <RevenueChart />
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">
          <EmployeeChart />
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>
      <div className="mt-8">
  <QuickActions />
</div>

    </div>
  );
};

export default Dashboard;