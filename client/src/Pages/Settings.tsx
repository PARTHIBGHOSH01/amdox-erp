import MetricCard from "../components/Dashboard/MetricCard";

const Settings = () => {
  return (
    <div className="space-y-6">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 p-8 shadow-2xl">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex justify-between items-center">

          <div>
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2">
              System Configuration
            </p>

            <h1 className="text-5xl font-extrabold text-white mb-4">
              Settings Dashboard ⚙️
            </h1>

            <p className="text-lg text-white/90 max-w-2xl">
              Manage users, permissions, integrations and security
              from one centralized control panel.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold">
                Add User
              </button>

              <button className="border border-white/40 text-white px-6 py-3 rounded-xl">
                Security Audit
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">

              <h3 className="text-white font-bold text-xl mb-4">
                System Overview
              </h3>

              <div className="space-y-3 text-white">
                <p>👥 Users: 125</p>
                <p>🛡️ Roles: 8</p>
                <p>🔗 Integrations: 12</p>
                <p>🔒 Security Score: 98%</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    👤 Profile Settings
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div>
      <label className="text-slate-400 block mb-2">
        Full Name
      </label>

      <input
        type="text"
        defaultValue="Hakeem Shaik"
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
      />
    </div>

    <div>
      <label className="text-slate-400 block mb-2">
        Email
      </label>

      <input
        type="email"
        defaultValue="hakeem@amxerp.com"
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
      />
    </div>

  </div>

</div>
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    🔒 Security Settings
  </h2>

  <div className="space-y-4">

    <button className="w-full bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl hover:bg-red-500/20 transition">
      Change Password
    </button>

    <button className="w-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 p-4 rounded-2xl hover:bg-yellow-500/20 transition">
      Enable Two-Factor Authentication
    </button>

  </div>

</div>
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    🎨 Theme Settings
  </h2>

  <div className="grid grid-cols-3 gap-4">

    <button className="bg-slate-800 p-4 rounded-2xl text-white hover:ring-2 hover:ring-purple-500">
      Dark
    </button>

    <button className="bg-slate-800 p-4 rounded-2xl text-white hover:ring-2 hover:ring-blue-500">
      Blue
    </button>

    <button className="bg-slate-800 p-4 rounded-2xl text-white hover:ring-2 hover:ring-pink-500">
      Purple
    </button>

  </div>

</div>
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold text-white mb-6">
    🌐 System Preferences
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between items-center">
      <span className="text-white">
        Email Notifications
      </span>

      <input type="checkbox" defaultChecked />
    </div>

    <div className="flex justify-between items-center">
      <span className="text-white">
        Auto Backup
      </span>

      <input type="checkbox" defaultChecked />
    </div>

  </div>

</div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <MetricCard title="👥 Total Users" value="125" />
        <MetricCard title="🛡️ Roles" value="8" />
        <MetricCard title="🔗 Integrations" value="12" />
        <MetricCard title="🔒 Security Score" value="98%" />

      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* User Management */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold">
              👥 User Management
            </h2>

            <ul className="text-slate-400 mt-4 space-y-2">
              <li>• Create Users</li>
              <li>• Edit Accounts</li>
              <li>• Disable Accounts</li>
              <li>• Reset Passwords</li>
            </ul>
          </div>

        </div>

        {/* Roles */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold">
              🛡️ Roles & Permissions
            </h2>

            <ul className="text-slate-400 mt-4 space-y-2">
              <li>• Admin</li>
              <li>• HR</li>
              <li>• Finance</li>
              <li>• Employee</li>
            </ul>
          </div>

        </div>

        {/* Integrations */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold">
              🔗 Integrations
            </h2>

            <ul className="text-slate-400 mt-4 space-y-2">
              <li>• Google Workspace</li>
              <li>• GitHub</li>
              <li>• Slack</li>
              <li>• Microsoft 365</li>
            </ul>
          </div>

        </div>

        {/* Security */}
        <div className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-1 transition-all">

          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold">
              🔒 Security
            </h2>

            <ul className="text-slate-400 mt-4 space-y-2">
              <li>• 2FA Enabled</li>
              <li>• Password Policy</li>
              <li>• Audit Logs</li>
              <li>• Access Monitoring</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          ⚡ Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
            ➕ Add User
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-green-500 hover:bg-green-500/10 transition-all">
            🛡️ Create Role
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all">
            🔗 Add Integration
          </button>

          <button className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-white hover:border-red-500 hover:bg-red-500/10 transition-all">
            🔒 Security Audit
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;