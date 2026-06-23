const QuickActions = () => {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-5">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl transition">
          ➕ Add Employee
        </button>

        <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl transition">
          📄 Generate Report
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-2xl transition">
          💰 Create Invoice
        </button>

        <button className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-2xl transition">
          🚀 New Project
        </button>

      </div>
    </div>
  );
};

export default QuickActions;