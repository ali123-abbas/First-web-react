import React from 'react'
import AuthorFirst from '../features/authorsection/authorfirst'
import Navbar from "../componets/Navbar"
import AuthorSec from '../features/authorsection/authorSec'
import Footer from "../componets/footer"
import ThirdSection from "../../src/features/HomeSections/thirdSec"

const Author = () => {
  return (
    <div>
      <Navbar />
      <AuthorFirst />
      <AuthorSec />
      <ThirdSection />
      <Footer />
    </div>
  )
}

export default Author