import React from 'react'

const LandingPage = () => {
    const currentUrl = window.location.href
    console.log(currentUrl);
  return (
    <div className='landing-page'>This is Landing Page</div>
  )
}

export default LandingPage