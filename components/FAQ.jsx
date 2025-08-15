'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown } from "react-icons/fi"

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-[#0F1118] rounded-lg border border-gray-700 mb-4">
      <button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-[#181b25] transition-colors"
        onClick={onToggle}
      >
        <span className="text-white font-medium text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FiChevronDown className={`text-gray-400 transition-transform`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-6"
          >
            <p className="text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Which blockchain network do you support?",
      answer:
        "We currently support Avalanche and Sui networks from day one, with plans to expand to Ethereum, Solana, and other major networks based on community demand.",
    },
    {
      question: "How is risk calculated?",
      answer:
        "Our AI-powered risk assessment algorithms analyze multiple factors including validator performance history, network conditions, slashing events, and real-time metrics to provide comprehensive risk scores.",
    },
    {
      question: "How often are updates provided?",
      answer:
        "We provide near real-time updates with sub-second monitoring and instant alerts when your validators need attention. Data is refreshed continuously to ensure accuracy.",
    },
    {
      question: "Is my validator data secure?",
      answer:
        "Yes, we use enterprise-grade security measures including encryption at rest and in transit, secure API endpoints, and never store your private keys or sensitive validator credentials.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply connect your validator addresses across supported networks with one-click setup. Our algorithms continuously monitor performance and provide actionable alerts with specific recommendations.",
    },
    {
      question: "What is Luminex?",
      answer:
        "Luminex is a comprehensive validator monitoring platform that provides real-time, risk-based insights for blockchain validators. We help you protect your stake with intelligent monitoring and early warning systems.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl mb-2 text-white font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-4">Everything you need to know about LiteAfrika and how it works</p>
        </div>

        <div className="bg-[#0F1118] rounded-2xl p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
