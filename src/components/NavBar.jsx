import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <button> <NavLink to="/"> Home </NavLink> </button>
        <button> <NavLink to="/works"> Works </NavLink> </button>
    </div>
  )
}

export default NavBar