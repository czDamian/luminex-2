export default function Testimonials() {
  const testimonials = [
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/avax-logo.png",
    },
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/avax-logo.png",
    },
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/avax-logo.png",
    },
  ]

  return (
    <section className="py-20 bg-[#0F1118] max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
