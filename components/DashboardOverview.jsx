'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function DashboardOverview() {
  return (
    <motion.section
      className="bg-[#0F1118] max-w-7xl mx-auto py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glowing ovals */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] rounded-full mix-blend-lighten filter blur-3xl opacity-20"
        style={{ backgroundColor: '#FC01D8', transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.1, 1], transition: { duration: 5, repeat: Infinity } }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] rounded-full mix-blend-lighten filter blur-3xl opacity-20"
        style={{ backgroundColor: '#7928CA', transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.1, 1], transition: { duration: 5, repeat: Infinity, delay: 2.5 } }}
      ></motion.div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dashboard Overview</h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto md:mx-0">
            Your validators at a glance — color-coded health status, uptime stats, slashing alerts, and last update
            times. Everything you need, all in one view
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/overview.png" width={1000} height={1000} alt="Dashboard Overview" />
        </div>
      </div>
    </motion.section>
  )
}
