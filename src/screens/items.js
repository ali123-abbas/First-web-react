import React from 'react'
import Footer from '../componets/footer'
import Navbar from '../componets/Navbar'
import ItemHead from '../features/ITEM SECTIONS/itemHead'
import ItemSec from '../features/ITEM SECTIONS/ItemSections'
import ThirdSection from '../features/HomeSections/thirdSec.js'


const Items = () => {
  return (
    <div>
        <Navbar />
        <ItemHead />
        <ItemSec />
        <ThirdSection />
        <Footer />
    </div>
  )
}

export default Items