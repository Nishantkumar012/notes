import React from 'react'
import MainArea from '../components/layout/MainArea'
import Sidebar from '../components/sidebar/Sidebar'

function Dashboard() {
  return (
    <div className="min-h-screen flex ">
      <Sidebar />
      <MainArea />
    </div>
  )
}

export default Dashboard
