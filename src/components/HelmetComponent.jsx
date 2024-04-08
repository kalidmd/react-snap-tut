import { Helmet } from "react-helmet-async";

import React from 'react'

const HelmetComponent = (props) => {
  return (
    <Helmet>
      <title> {props.title} </title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={props.canonicalUrl} />
    </Helmet>
  )
}

export default HelmetComponent