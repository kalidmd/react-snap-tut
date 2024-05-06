import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about-us"> About Us </NavLink>
    </div>
  )
}

export default NavBar