export default function MetricCard({ icon: Icon, value, label, change, changeType, iconBg }) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-400"
      case "negative":
        return "text-red-400"
      case "status":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="bg-[#0F1118] rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-medium ${getChangeColor()}`}>{change}</span>
      </div>

      <div>
        <div className="text-3xl font-bold text-white mb-1 font-orbitron">{value}</div>
        <div className="text-gray-400 text-sm font-exo2">{label}</div>
      </div>
    </div>
  )
}
