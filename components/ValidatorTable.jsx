"use client"
import { useState, useEffect } from "react"
import { MdMoreHoriz } from "react-icons/md"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function ValidatorTable() {
  const [validators, setValidators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const validatorsPerPage = 20

  // Fetch validators data
  useEffect(() => {
    const fetchValidators = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/sui')
        const data = await response.json()

        if (data.success) {
          setValidators(data.trimmedValidators || [])
        } else {
          setError(data.error || 'Failed to fetch validators')
        }
      } catch (err) {
        setError('Failed to connect to API')
        console.error('API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchValidators()
  }, [])

  // Pagination logic
  const totalPages = Math.ceil(validators.length / validatorsPerPage)
  const startIndex = (currentPage - 1) * validatorsPerPage
  const endIndex = startIndex + validatorsPerPage
  const currentValidators = validators.slice(startIndex, endIndex)

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case "EXCELLENT":
        return "bg-green-500"
      case "HEALTHY":
        return "bg-blue-500"
      case "AT_RISK":
        return "bg-yellow-500"
      case "UNHEALTHY":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getUptimeColor = (uptime) => {
    if (uptime >= 99) return "text-green-400"
    if (uptime >= 95) return "text-yellow-400"
    return "text-red-400"
  }

  const getHealthColor = (health) => {
    if (health >= 80) return "text-green-400"
    if (health >= 50) return "text-yellow-400"
    return "text-red-400"
  }

  const formatAddress = (address) => {
    if (!address) return ""
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i)
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i)
        }
      }
    }

    return pages
  }

  if (loading) {
    return (
      <div className="bg-[#0F1118] rounded-lg border border-gray-700 p-8">
        <div className="text-center text-white">Loading validators...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-[#0F1118] rounded-lg border border-gray-700 p-8">
        <div className="text-center text-red-400">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="bg-[#0F1118] rounded-lg border border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Sui Validator Status</h2>
        <p className="text-gray-400 text-sm mt-1">Total: {validators.length} validators</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-400 font-medium">Status</th>
              <th className="text-left p-4 text-gray-400 font-medium">Validator</th>
              <th className="text-left p-4 text-gray-400 font-medium">Stake (SUI)</th>
              <th className="text-left p-4 text-gray-400 font-medium">Commission</th>
              <th className="text-left p-4 text-gray-400 font-medium">APY</th>
              <th className="text-left p-4 text-gray-400 font-medium">Uptime</th>
              <th className="text-left p-4 text-gray-400 font-medium">Health</th>
              <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentValidators.map((validator, index) => (
              <tr key={validator.address} className="border-b border-gray-700 hover:bg-gray-750">
                <td className="p-4">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(validator.status)}`} title={validator.status}></div>
                </td>
                <td className="p-4">
                  <div>
                    <div className="text-white text-base font-orbitron">{validator.name}</div>
                    <div className="text-gray-400 font-exo2 text-sm">{formatAddress(validator.address)}</div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-white font-medium">{validator.stake.toLocaleString()}</span>
                </td>
                <td className="p-4">
                  <span className="text-white">{validator.commission}%</span>
                </td>
                <td className="p-4">
                  <span className="text-white">{validator.apy}%</span>
                </td>
                <td className="p-4">
                  <span className={`font-medium ${getUptimeColor(validator.uptime)}`}>
                    {validator.uptime}%
                  </span>
                </td>
                <td className="p-4">
                  <span className={`font-medium ${getHealthColor(validator.health)}`}>
                    {validator.health}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-gray-400 hover:text-white">
                    <MdMoreHoriz className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <div className="text-gray-400 text-sm">
          Showing {startIndex + 1}-{Math.min(endIndex, validators.length)} of {validators.length} validators
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            {getPageNumbers().map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded ${currentPage === page
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}