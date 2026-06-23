import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaBoxes,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const{role} = useAuth();

  return (
    <aside className="w-56 min-h-screen bg-slate-950 border-r border-slate-800 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        AMX ERP
      </h1>

      <nav>
        <ul className="space-y-3">

  {/* Dashboard - Everyone */}
  <li>
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-purple-600"
            : "hover:bg-slate-800"
        }`
      }
    >
      <FaChartPie />
      Dashboard
    </NavLink>
  </li>

  {/* HR */}
  {(role === "Admin" || role === "HR") && (
    <li>
      <NavLink
        to="/hr"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        <FaUsers />
        HR
      </NavLink>
    </li>
  )}

  {/* Finance */}
  {(role === "Admin" || role === "Finance") && (
    <li>
      <NavLink
        to="/finance"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        <FaMoneyBillWave />
        Finance
      </NavLink>
    </li>
  )}

  {/* Projects */}
  {(role === "Admin" || role === "Manager") && (
    <li>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        <FaProjectDiagram />
        Projects
      </NavLink>
    </li>
  )}

  {/* Supply Chain */}
  {(role === "Admin" || role === "Manager") && (
    <li>
      <NavLink
        to="/supply-chain"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        <FaBoxes />
        Supply Chain
      </NavLink>
    </li>
  )}

  {/* Settings - Admin Only */}
  {role === "Admin" && (
    <li>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        <FaCog />
        Settings
      </NavLink>
    </li>
  )}

</ul>
</nav> 
</aside> 
); 
}; 
export default Sidebar;