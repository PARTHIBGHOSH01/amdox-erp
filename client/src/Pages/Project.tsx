import MetricCard from "../components/Dashboard/MetricCard";
import ProjectList from "../components/Projects/ProjectList";
import ProjectForm from "../components/Projects/ProjectForm";
const Projects = () => {
  return (
    <div className="space-y-6">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-8 shadow-2xl">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex justify-between items-center">

          <div>
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2">
              Project Management
            </p>

            <h1 className="text-5xl font-extrabold text-white mb-4">
              Projects Dashboard 🚀
            </h1>

            <p className="text-lg text-white/90 max-w-2xl">
              Track project progress, deadlines, team collaboration
              and resource allocation in one place.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Create Project
              </button>

              <button className="border border-white/40 text-white px-6 py-3 rounded-xl">
                View Reports
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">

              <h3 className="text-white font-bold text-xl mb-4">
                Projects Overview
              </h3>

              <div className="space-y-3 text-white">
                <p>🚀 Active Projects: 48</p>
                <p>👨‍💻 Team Members: 156</p>
                <p>📅 Deadlines: 12</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <MetricCard title="🚀 Active Projects" value="48" />
  <MetricCard title="📅 Deadlines" value="12" />
  <MetricCard title="👨‍💻 Team Members" value="156" />
  <MetricCard title="✅ Completed" value="24" />

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20">

    <h2 className="text-white text-xl font-bold">
      🚀 Project Alpha
    </h2>
    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
  🟢 On Track
</span>

    <p className="text-slate-400 mt-2">
      Team: 12 Members
    </p>

    <p className="text-slate-400">
      Deadline: Aug 15
    </p>

    <div className="mt-4 h-3 bg-slate-800 rounded-full">
      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-[80%]"></div>
    </div>

    <p className="text-blue-400 mt-3">
      75% Complete
    </p>

  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

    <h2 className="text-white text-xl font-bold">
      🚀 Project Beta
    </h2>
    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-400">
  🟡 At Risk
</span>

    <p className="text-slate-400 mt-2">
      Team: 8 Members
    </p>

    <p className="text-slate-400">
      Deadline: Aug 22
    </p>

    <div className="mt-4 h-3 bg-slate-800 rounded-full">
     <div className="h-full w-2/5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all duration-500 group-hover:w-1/2"></div>
    </div>

    <p className="text-pink-400 mt-3">
      42% Complete
    </p>

  </div>
  </div>
  <ProjectList />
  {/* Project Tasks Board */}
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold text-white">
      📋 Project Tasks
    </h2>

    <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl text-white transition">
      + New Task
    </button>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full text-left">

      <thead>
        <tr className="border-b border-slate-700 text-slate-400">
          <th className="pb-4">Task</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody className="text-white">

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">Frontend Dashboard UI</td>
          <td>Hakeem</td>
          <td className="text-red-400">High</td>
          <td className="text-green-400">Completed</td>
        </tr>

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">API Integration</td>
          <td>Ramalaxmi</td>
          <td className="text-yellow-400">Medium</td>
          <td className="text-blue-400">In Progress</td>
        </tr>

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">Database Design</td>
          <td>Parthib</td>
          <td className="text-red-400">High</td>
          <td className="text-yellow-400">Pending</td>
        </tr>

        <tr className="hover:bg-slate-800/50 transition">
          <td className="py-4">Testing & QA</td>
          <td>Ravali</td>
          <td className="text-green-400">Low</td>
          <td className="text-slate-400">Not Started</td>
        </tr>

      </tbody>

    </table>
    <ProjectForm />

<div className="mt-6">
  <ProjectList />
</div>
    {/* Quick Actions */}
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    ⚡ Project Actions
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    <button className="bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 rounded-2xl p-4 text-blue-400 transition-all hover:scale-105">
      🚀 Create Project
    </button>

    <button className="bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 rounded-2xl p-4 text-violet-400 transition-all hover:scale-105">
      📋 Assign Tasks
    </button>

    <button className="bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 rounded-2xl p-4 text-green-400 transition-all hover:scale-105">
      📊 Generate Report
    </button>

    <button className="bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 rounded-2xl p-4 text-pink-400 transition-all hover:scale-105">
      👥 Team Meeting
    </button>

  </div>

</div>

  </div>

</div>

</div>
  );
};

export default Projects;