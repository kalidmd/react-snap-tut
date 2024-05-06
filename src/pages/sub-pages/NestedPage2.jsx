import React from 'react'
import HelmetComponent from '../../components/HelmetComponent';

import uiImage from "../../assets/images/ui-design.jpg"

const NestedPage2 = () => {
  const title = "Nested Page 2"
  const description = "Nested Page 2 Description"
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`

  return (
    <div className='ui-design'>
        <HelmetComponent 
          title={title}
          description={description}
          canonicalUrl={canonicalUrl} 
          ogTitle={title}
          ogImage={uiImage}
          ogUrl={canonicalUrl}
        />
        <h1>
            This is Nested Page 2.
        </h1>
    </div>
  )
}

export default NestedPage2