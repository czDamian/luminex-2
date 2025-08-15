import Link from "next/link"

export default function LandingHeader() {
  return (
    <header className="bg-[#0F1118] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Lumi</span>
              <span className="text-pink-500">nex</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Demo
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
