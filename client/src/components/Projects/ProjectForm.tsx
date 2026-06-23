import { useState } from "react";
import toast from "react-hot-toast";
import { createProject } from "../../services/projectService";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const project = {
    name: projectName,
    teamSize,
  };

  console.log("Submitting:", project);

  try {
    const result = await createProject(project);

    console.log("Response:", result);

    toast.success("Project Created Successfully");

    setProjectName("");
    setTeamSize("");
  } catch (error) {
    console.error("Project Error:", error);
    toast.error("Failed to create project");
  }
};
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        🚀 Create Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700"
        />

        <input
          type="number"
          placeholder="Team Size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;