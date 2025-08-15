import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-[#0F1118] py-20 overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Keep an Eye on Your
          <br />
          Validators — Without
          <br />
          the Hassle
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Stay ahead with real-time, risk-based monitoring. No jargon. No switching dashboards. Just clear insights to
          protect your stake
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          >
            Launch Dashboard
          </Link>
          <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
