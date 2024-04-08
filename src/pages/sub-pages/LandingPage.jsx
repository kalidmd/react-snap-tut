import React from 'react'
import HelmetComponent from '../../components/HelmetComponent';
const LandingPage = () => {
    const title = "Landing Page"
    const description = "Landing Page Description"
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const currentPath = window.location.pathname
    const canonicalUrl = `${baseUrl}${currentPath}`
   
  return (
    <div className='landing-page'>
       <HelmetComponent
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
       />
        <h1>
            This is Landing Page
        </h1>
    </div>
  )
}

export default LandingPage