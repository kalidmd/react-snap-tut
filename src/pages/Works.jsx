import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HelmetComponent from '../components/HelmetComponent'
const Works = () => {
  const title = "Works"
  const description = "Works Page Description"
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`
  console.log(window.location.origin);
  return (
    <div className='works'>
        <HelmetComponent
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
        />
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