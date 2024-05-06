import React from 'react'
import HelmetComponent from '../../components/HelmetComponent';

const NestedPage3 = () => {
    const title = "Nested Page 3"
    const description = "Nested Page 3 Description"
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
            This is Nested Page 3.
        </h1>
    </div>
  )
}

export default NestedPage3