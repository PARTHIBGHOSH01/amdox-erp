type MetricCardProps = {
  title: string;
  value: string;
};

const MetricCard = ({ title, value }: MetricCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">

        {/* Title */}
        <p className="text-slate-400 text-sm uppercase tracking-wider">
          {title}
        </p>

        {/* Value */}
        <h2 className="text-4xl font-bold text-white mt-3">
          {value}
        </h2>

        {/* Trend */}
        <div className="flex items-center justify-between mt-4">

          <span className="text-green-400 text-sm font-medium">
            📈 +12.4%
          </span>

          <span className="text-slate-500 text-xs">
            This Month
          </span>

        </div>

        {/* Mini Analytics Bar */}
        <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">

          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        </div>

      </div>

    </div>
  );
};

export default MetricCard;