import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='flex items-end justify-center bg-slate-600 h-screen w-screen'>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Homepage