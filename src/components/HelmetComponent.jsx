import { Helmet } from "react-helmet-async";

import React from 'react'

const HelmetComponent = ({title, description, canonicalUrl, ogImage, ogUrl}) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} /> 
      {/* <meta property="twitter:card" content={ogTwitterCard} /> 
      <meta property="twitter:image:alt" content={ogImageAlt} />  */}

      {/* <meta property="og:type" content="video.movie" /> */}
    </Helmet>
  )
}

export default HelmetComponent