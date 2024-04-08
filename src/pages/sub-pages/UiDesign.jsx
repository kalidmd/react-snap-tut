import React from 'react'
import HelmetComponent from '../../components/HelmetComponent';

const UiDesign = () => {
  const title = "Ui Design Page"
  const description = "Ui Desing Page Description"
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`

  return (
    <div className='ui-design'>
        <HelmetComponent 
          title={title}
          description={description}
          canonicalUrl={canonicalUrl} 
        />
        <h1>
            This is Ui Design
        </h1>
    </div>
  )
}

export default UiDesign