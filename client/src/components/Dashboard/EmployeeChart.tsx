import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "HR", value: 30 },
  { name: "Finance", value: 20 },
  { name: "Projects", value: 25 },
  { name: "IT", value: 25 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"];

const EmployeeChart = () => {
  return (
    <div className="bg-white rounded-lg shadow p-5 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Employee Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeChart;