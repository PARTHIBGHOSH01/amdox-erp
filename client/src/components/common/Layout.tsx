import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6 bg-slate-950 min-h-screen text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;