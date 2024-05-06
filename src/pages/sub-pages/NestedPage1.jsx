import React from 'react'
import HelmetComponent from '../../components/HelmetComponent'

const NestedPage1 = () => {
  const title = "Nested Page 1"
  const description = "Nested Page 1 Description"
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const currentPath = window.location.pathname
  const canonicalUrl = `${baseUrl}${currentPath}`

  return (
    <div className='all'>
      <HelmetComponent
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
       />
      <h1>
          Nested Page 1 is selected automatically.
      </h1>
    </div>
  )
}

export default NestedPage1