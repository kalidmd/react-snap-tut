import React from 'react'
import HelmetComponent from '../../components/HelmetComponent';

import uiImage from "../../assets/images/ui-design.jpg"

const UiDesign = () => {
  const title = "Ui Design Page"
  const description = "Ui Desing Page Description"
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
            This is Ui Design Page
        </h1>
    </div>
  )
}

export default UiDesign