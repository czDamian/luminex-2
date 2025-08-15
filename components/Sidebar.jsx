"use client"

import { MdDashboard, MdVerifiedUser, MdSettings, MdHelp } from "react-icons/md"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/dashboard", active: pathname === "/dashboard" },
    { icon: MdVerifiedUser, label: "Validators", href: "/dashboard", active: pathname === "#dashboard" },
    { icon: MdSettings, label: "Settings", href: "/settings", active: pathname === "/settings" },
    { icon: MdHelp, label: "Help", href: "/help", active: pathname === "/help" },
  ]

  return (
    <div className="w-64 bg-[#0F1118] border-r border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            <span className="text-white">Lumi</span>
            <span className="text-pink-500">nex</span>
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
