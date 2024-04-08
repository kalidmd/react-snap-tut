import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HelmetComponent from '../components/HelmetComponent'

const Home = () => {
  const title = "Home"
  const description = "Home Page Description"
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`
  return (
    <div className='home'>
        <HelmetComponent 
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
        />

        <NavBar />
        <h1>This is Home Page.</h1>
        <Footer />
    </div>
  )
}

export default Home