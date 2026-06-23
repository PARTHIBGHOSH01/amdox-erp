const activities = [
  {
    title: "👨‍💼 Rahul joined HR Department",
    time: "2 minutes ago",
  },
  {
    title: "💰 Invoice INV-2026 generated",
    time: "10 minutes ago",
  },
  {
    title: "🚀 Project Alpha created",
    time: "30 minutes ago",
  },
  {
    title: "📦 Inventory updated",
    time: "1 hour ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-5">
        Recent Activities
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <p className="text-white">
              {activity.title}
            </p>

            <span className="text-slate-400 text-sm">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;