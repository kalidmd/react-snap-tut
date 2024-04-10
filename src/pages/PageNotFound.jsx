import React from 'react'
import { Helmet } from 'react-helmet-async'

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1> 404 | Page Not Found </h1>
    </div>
  )
}

export default PageNotFound