import { StickyNote, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-teal-600 w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <StickyNote size={18} />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Notes App
            </span>
          </Link>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/dash"
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
