import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("Admin");

  const handleLogin = (e: FormEvent) => {
  e.preventDefault();

  localStorage.setItem("token", "amx-demo-token");

  login(role);

  navigate("/dashboard");
};

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AMX ERP
          </h1>

          <p className="text-slate-300 mt-3">
            Welcome back to your workspace
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-800/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-slate-800/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-slate-300 mb-3">
              Select Role
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => setRole("Admin")}
                className={`p-3 rounded-xl border text-white transition-all duration-300 ${
                  role === "Admin"
                    ? "bg-purple-600 border-purple-400 scale-105"
                    : "bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-slate-700"
                }`}
              >
                👑 Admin
              </button>

              <button
                type="button"
                onClick={() => setRole("HR")}
                className={`p-3 rounded-xl border text-white transition-all duration-300 ${
                  role === "HR"
                    ? "bg-purple-600 border-purple-400 scale-105"
                    : "bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-slate-700"
                }`}
              >
                👥 HR
              </button>

              <button
                type="button"
                onClick={() => setRole("Finance")}
                className={`p-3 rounded-xl border text-white transition-all duration-300 ${
                  role === "Finance"
                    ? "bg-purple-600 border-purple-400 scale-105"
                    : "bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-slate-700"
                }`}
              >
                💰 Finance
              </button>

              <button
                type="button"
                onClick={() => setRole("Manager")}
                className={`p-3 rounded-xl border text-white transition-all duration-300 ${
                  role === "Manager"
                    ? "bg-purple-600 border-purple-400 scale-105"
                    : "bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-slate-700"
                }`}
              >
                🚀 Manager
              </button>

            </div>

            <p className="text-xs text-slate-400 mt-3">
              Selected Role: <span className="text-purple-400">{role}</span>
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:scale-105 transition duration-300"
          >
            Sign In
          </button>

        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </a>
        </div>

      </div>

    </div>
  );
};

export default Login;