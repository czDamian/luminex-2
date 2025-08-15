import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard"

export const metadata = {
  title: "Dashboard - Luminex",
  description: "Track validator data on Avalanche and Sui blockchain",
  generator: "Luminex",
}

export default function Home() {
  return (
    <div className="flex h-screen font-exo2 bg-[#121318]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}
