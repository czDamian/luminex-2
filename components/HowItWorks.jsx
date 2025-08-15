export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#0F1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">How it works</h2>

        <div className="relative">



          <div className="grid md:grid-cols-2 gap-12 relative z-20 pt-20 pb-20">
            {/* Step 1 */}
            <div className="text-left">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect Validators</h3>
              <p className="text-gray-300">
                Add your validator addresses across Avalanche and Sui networks with one-click setup.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-right md:mt-32">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 ml-auto">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-300">
                Our advanced algorithms continuously monitor performance, uptime, and network conditions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-left md:mt-32">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300">
                AI-powered risk analysis identifies potential issues before they impact your operations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-right">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 ml-auto">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Actionable Alerts</h3>
              <p className="text-gray-300">
                Receive intelligent notifications with specific recommendations to optimize performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
