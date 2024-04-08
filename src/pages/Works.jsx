import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Works = () => {
    const currentUrl = window.location.href
    console.log(currentUrl);
  return (
    <div className='works'>
        <NavBar />
        <h1>This is Works Page.</h1>
        <button> <NavLink to=""> All </NavLink> </button>
        <button> <NavLink to="ui-design"> Ui Design </NavLink> </button>
        <button> <NavLink to="landing-page"> Landing Page </NavLink> </button>
       <Outlet />
       <Footer />
    </div>
  )
}

export default Works