import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    const currentUrl = window.location.href
    console.log(currentUrl);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    console.log(baseUrl);
  return (
    <div className='home'>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="this is my home page description." />
            <link rel="stylesheet" href="" />
        </Helmet>
        <NavBar />
        <h1>This is Home Page.</h1>
        <Footer />
    </div>
  )
}

export default Home