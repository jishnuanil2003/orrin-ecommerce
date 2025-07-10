import React from 'react'
import logo from '../../assets/ORRIN WATCHES white.png'
import { Link } from 'react-router-dom'

const LoginNav = ({title}) => {
  return (
    <div className='bg-[#000000] text-white pr-5 py-4 flex justify-between items-center px-8'>
      <img className='h-2 w-auto' src={logo} alt="logo" />
      <div className="">
      <p><Link to={'/'+title} className="hover:text-gray-400 md:pr-14 text-sm">{title}</Link></p>
      </div>
    </div>
  )
}

export default LoginNav
