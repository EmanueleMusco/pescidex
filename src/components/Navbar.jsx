import React from 'react'
import './Navbar.css'
const Navbar = () => {
    const change = ()=>{
        if(document.getElementById('container_nav').style.display == 'none'){
            document.getElementById('container_nav').style.display = 'block'
        }else{
            document.getElementById('container_nav').style.display = 'none'
        }

    }
  return (
    <div className='nav'>
            <div className='container_nav h-full w-full ' id='container_nav'>
                <div className='bg-orange-500 rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer'></div>
                <div className='bg-blue-500 rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer'></div>
                <div className='bg-black rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer'></div>
                <div className='bg-violet-500 rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer'></div>
                <div className='bg-yellow-500 rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer'></div>
            </div>
            <div className='bg-white rounded-full h-12 w-12 shadow-lg mb-5 hover:cursor-pointer ' onClick={change}></div>
    </div>

  )
}

export default Navbar