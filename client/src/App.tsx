import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import HR from "./Pages/HR";
import Finance from "./Pages/Finance";
import Project from "./Pages/Project";
import SupplyChain from "./Pages/Supplychain";
import Settings from "./Pages/Settings";

import Layout from "./components/common/Layout";
import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/hr"
        element={
          <PrivateRoute>
            <Layout>
              <HR />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/finance"
        element={
          <PrivateRoute>
            <Layout>
              <Finance />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <Layout>
              <Project />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/supply-chain"
        element={
          <PrivateRoute>
            <Layout>
              <SupplyChain />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Layout>
              <Settings />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;