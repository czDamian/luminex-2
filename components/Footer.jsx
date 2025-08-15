'use client'

import Link from "next/link"
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-[#0F1118] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Luminex. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
          <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
