import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

const ProjectList = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        🚀 Project Management
      </h2>

      <table className="w-full text-left">

        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            <th>ID</th>
            <th>Name</th>
            <th>Team</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="text-white">

          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b border-slate-800"
            >
              <td className="py-4">{project.id}</td>
              <td>{project.name}</td>
              <td>{project.team}</td>
              <td>{project.progress}%</td>
              <td
                className={
                  project.status === "Completed"
                    ? "text-green-400"
                    : "text-yellow-400"
                }
              >
                {project.status}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProjectList;