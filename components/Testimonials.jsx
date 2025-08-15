'use client'

import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/testimonial.png",
    },
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/testimonial.png",
    },
    {
      name: "Chris John",
      role: "Avalanche Validator",
      content:
        "Luminex is a risk-first approach saved us from a major slashing event. The early warning system is incredibly accurate.",
      avatar: "/testimonial.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-[#0F1118] max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Trusted By Validators</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
