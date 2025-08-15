import MetricCard from "./MetricCard"
import ValidatorTable from "./ValidatorTable"
import { MdTrendingUp, MdHome, MdSchedule, MdSecurity } from "react-icons/md"

export default function Dashboard() {
  const metrics = [
    {
      icon: MdTrendingUp,
      value: "247",
      label: "Active Validators",
      change: "+12.5%",
      changeType: "positive",
      iconBg: "bg-green-500",
    },
    {
      icon: MdHome,
      value: "98.7%",
      label: "Network Health",
      change: "Excellent",
      changeType: "status",
      iconBg: "bg-blue-500",
    },
    {
      icon: MdSchedule,
      value: "99.2%",
      label: "Average Uptime",
      change: "+0.3%",
      changeType: "positive",
      iconBg: "bg-purple-500",
    },
    {
      icon: MdSecurity,
      value: "3",
      label: "Slashing Events",
      change: "-2",
      changeType: "negative",
      iconBg: "bg-red-500",
    },
  ]

  return (
    <div className="p-6 space-y-6 ">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Validator Table */}
      <ValidatorTable />
    </div>
  )
}
