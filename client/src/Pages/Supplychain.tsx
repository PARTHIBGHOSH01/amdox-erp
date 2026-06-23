import MetricCard from "../components/Dashboard/MetricCard";
import InventoryList from "../components/SupplyChain/InventoryList";
import InventoryForm from "../components/SupplyChain/InventoryForm";

const SupplyChain = () => {
  return (
    <div className="space-y-6">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-8 shadow-2xl">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex justify-between items-center">

          <div>
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2">
              Supply Chain Management
            </p>

            <h1 className="text-5xl font-extrabold text-white mb-4">
              Supply Chain Dashboard 📦
            </h1>

            <p className="text-lg text-white/90 max-w-2xl">
              Manage inventory, vendors, purchase orders and logistics
              from one centralized platform.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Add Inventory
              </button>

              <button className="border border-white/40 text-white px-6 py-3 rounded-xl">
                View Reports
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">

              <h3 className="text-white font-bold text-xl mb-4">
                Supply Overview
              </h3>

              <div className="space-y-3 text-white">
                <p>📦 Inventory: 2341</p>
                <p>🚚 Shipments: 145</p>
                <p>🏢 Vendors: 89</p>
                <p>⚠️ Low Stock: 17</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <MetricCard title="📦 Inventory Items" value="2341" />
        <MetricCard title="🚚 Shipments" value="145" />
        <MetricCard title="🏢 Vendors" value="89" />
        <MetricCard title="⚠️ Low Stock" value="17" />

      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-white">
      Inventory Management
    </h2>

    <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl text-white">
      + Add Item
    </button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-left">

      <thead>
        <tr className="border-b border-slate-700 text-slate-400">
          <th className="pb-4">Item ID</th>
          <th>Product</th>
          <th>Stock</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody className="text-white">

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">ITM001</td>
          <td>Laptop</td>
          <td>45</td>
          <td className="text-green-400">In Stock</td>
        </tr>

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">ITM002</td>
          <td>Monitor</td>
          <td>18</td>
          <td className="text-yellow-400">Low Stock</td>
        </tr>

        <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
          <td className="py-4">ITM003</td>
          <td>Keyboard</td>
          <td>120</td>
          <td className="text-green-400">In Stock</td>
        </tr>

        <tr className="hover:bg-slate-800/50 transition">
          <td className="py-4">ITM004</td>
          <td>Mouse</td>
          <td>0</td>
          <td className="text-red-400">Out of Stock</td>
        </tr>

      </tbody>

    </table>
  </div>

</div>
<InventoryForm />

   <div className="mt-6">
      <InventoryList />
    </div>

      {/* Inventory Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Laptop Inventory */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">

            <h2 className="text-white text-xl font-bold">
              📦 Laptop Inventory
            </h2>

            <p className="text-slate-400 mt-2">
              Stock: 450
            </p>

            <p className="text-slate-400">
              Available: 420
            </p>

            <div className="mt-4 h-3 bg-slate-800 rounded-full">
              <div className="h-full w-[93%] bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
            </div>

            <p className="text-yellow-400 mt-3">
              93% Available
            </p>

          </div>

        </div>

        {/* Office Supplies */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">

            <h2 className="text-white text-xl font-bold">
              📦 Office Supplies
            </h2>

            <p className="text-slate-400 mt-2">
              Stock: 1200
            </p>

            <p className="text-slate-400">
              Available: 1080
            </p>

            <div className="mt-4 h-3 bg-slate-800 rounded-full">
              <div className="h-full w-[90%] bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
            </div>

            <p className="text-yellow-400 mt-3">
              90% Available
            </p>

          </div>

        </div>

      </div>

      {/* Vendor Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          🏢 Vendor Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-bold text-lg">
              Active Vendors
            </h3>

            <p className="text-4xl font-bold text-green-400 mt-3">
              89
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-bold text-lg">
              Pending Orders
            </h3>

            <p className="text-4xl font-bold text-yellow-400 mt-3">
              34
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <h3 className="text-white font-bold text-lg">
              In Transit
            </h3>

            <p className="text-4xl font-bold text-blue-400 mt-3">
              18
            </p>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          ⚡ Supply Chain Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all">
            ➕ Add Inventory
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-yellow-500 hover:bg-yellow-500/10 transition-all">
            📦 Purchase Order
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
            🚚 Track Shipment
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-green-500 hover:bg-green-500/10 transition-all">
            📊 Inventory Report
          </button>

        </div>

      </div>

    </div>
  );
};

export default SupplyChain;