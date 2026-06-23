import TransactionList from "../components/Finance/TransactionList";
const Finance = () => {
  return (
    <div className="space-y-6">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 p-8 shadow-2xl">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex justify-between items-center">

          <div>
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2">
              Financial Management
            </p>

            <h1 className="text-5xl font-extrabold text-white mb-4">
              Finance Dashboard 💰
            </h1>

            <p className="text-lg text-white/90 max-w-2xl">
              Monitor revenue, expenses, invoices and business performance from one place.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Generate Report
              </button>

              <button className="border border-white/40 text-white px-6 py-3 rounded-xl">
                View Analytics
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Finance Overview
              </h3>

              <div className="space-y-3 text-white">
                <p>💰 Revenue: ₹12.5L</p>
                <p>📈 Profit: ₹4.2L</p>
                <p>📄 Invoices: 248</p>
                <p>💳 Payments: 92%</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Revenue */}
        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-5 hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>

          <div className="relative z-10">
            <p className="text-slate-400 text-sm uppercase tracking-wider">
              💰 Revenue
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              ₹12.5L
            </h2>

            <div className="flex justify-between mt-4">
              <span className="text-green-400">↑ 18%</span>
              <span className="text-slate-500 text-sm">This Month</span>
            </div>

            <div className="mt-3 h-2 bg-slate-800 rounded-full">
              <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Profit */}
        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-5 hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

          <div className="relative z-10">
            <p className="text-slate-400 text-sm uppercase tracking-wider">
              📈 Profit
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              ₹4.2L
            </h2>

            <div className="flex justify-between mt-4">
              <span className="text-cyan-400">↑ 12%</span>
              <span className="text-slate-500 text-sm">This Month</span>
            </div>

            <div className="mt-3 h-2 bg-slate-800 rounded-full">
              <div className="h-full w-3/5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Invoices */}
        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-5 hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>

          <div className="relative z-10">
            <p className="text-slate-400 text-sm uppercase tracking-wider">
              📄 Invoices
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              248
            </h2>

            <div className="flex justify-between mt-4">
              <span className="text-purple-400">↑ 22%</span>
              <span className="text-slate-500 text-sm">This Month</span>
            </div>

            <div className="mt-3 h-2 bg-slate-800 rounded-full">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-5 hover:-translate-y-1 transition-all">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>

          <div className="relative z-10">
            <p className="text-slate-400 text-sm uppercase tracking-wider">
              💳 Payments
            </p>

            <h2 className="text-3xl font-bold text-white mt-2">
              92%
            </h2>

            <div className="flex justify-between mt-4">
              <span className="text-yellow-400">Collected</span>
              <span className="text-slate-500 text-sm">This Month</span>
            </div>

            <div className="mt-3 h-2 bg-slate-800 rounded-full">
              <div className="h-full w-[92%] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Transactions */}
      <TransactionList />
    {/* Quick Actions */}
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    ⚡ Quick Actions
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  {/* Generate Invoice */}
  <button className="group bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20">
    <div className="text-3xl mb-3">📄</div>
    <p className="font-semibold">Generate Invoice</p>
  </button>

  {/* Record Payment */}
  <button className="group bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20">
    <div className="text-3xl mb-3">💰</div>
    <p className="font-semibold">Record Payment</p>
  </button>

  {/* Financial Report */}
  <button className="group bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20">
    <div className="text-3xl mb-3">📊</div>
    <p className="font-semibold">Financial Report</p>
  </button>

  {/* Export Data */}
  <button className="group bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20">
    <div className="text-3xl mb-3">📥</div>
    <p className="font-semibold">Export Data</p>
  </button>

</div>

</div>
</div>
  );
};

export default Finance;