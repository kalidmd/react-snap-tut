import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HelmetComponent from '../components/HelmetComponent'

const AboutUs = () => {
  const title = "Works"
  const description = "Works Page Description"
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`

  return (
    <div className='works'>
        <HelmetComponent
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
        />
        <NavBar />
        <h1 style={{textAlign: "center"}} >This is About Us Page.</h1>
        <div className='sub-nav'>
          <NavLink className="nested-page" to="" end> Nested Page 1 </NavLink>
           <NavLink className="nested-page" to="nested-page-2"> Nested Page 2 </NavLink> 
           <NavLink className="nested-page" to="nested-page-3"> Nested Page 3 </NavLink>
        </div>
       <Outlet />
       <Footer />
    </div>
  )
}

export default AboutUs