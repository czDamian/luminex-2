import { MdSearch, MdKeyboardArrowDown } from "react-icons/md"

export default function Header() {
  return (
    <header className="bg-[#0F1118] border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search validators"
              className="w-full bg-[#0F1118] border border-purple-500 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="ml-6">
          <div className="relative">
            <select className="bg-[#0F1118] border border-purple-500 rounded-lg px-4 py-2 text-white appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>All Networks</option>
              <option>Avalanche</option>
              <option>Sui</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  )
}
