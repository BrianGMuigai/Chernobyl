import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Details from './components/Details'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Details />
      <Footer />
    </div>
  )
}

export default page