// import { useState } from 'react'
// import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import { ArrowRight, StickyNote, Shield, Zap } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-700 text-sm font-medium mb-8 border border-teal-200">
          <span className="flex h-2 w-2 rounded-full bg-teal-600"></span>
          Your Personal Workspace
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl leading-tight">
          Capture your thoughts, <br className="hidden md:block" />
          <span className="text-teal-600">organize your life.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate notes app designed to help you stay focused, productive,
          and in control of your ideas. Start taking better notes today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-teal-600/20 active:scale-95 w-full sm:w-auto"
          >
            Get Started Free
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-xl font-medium transition-all active:scale-95 w-full sm:w-auto"
          >
            Log In
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start transition-all hover:shadow-md hover:border-teal-100">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4">
              <StickyNote size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Smart Organization
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Categorize your notes easily, add favorites, and never lose track
              of a great idea again.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start transition-all hover:shadow-md hover:border-teal-100">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Lightning Fast
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Built for speed, so you can capture your thoughts the moment
              inspiration strikes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start transition-all hover:shadow-md hover:border-teal-100">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Secure & Private
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Your notes are stored securely and only accessible by you. Your
              workspace is completely private.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
