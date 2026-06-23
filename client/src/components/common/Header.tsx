import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-900 border-b border-slate-800">
      <div>
        <h2 className="text-white text-xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400">
          Logged in as:
          <span className="ml-2 text-purple-400 font-semibold">
            {role}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-slate-800 px-4 py-2 rounded-xl text-white">
          👤 {role}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;