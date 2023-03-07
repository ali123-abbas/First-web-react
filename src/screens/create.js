import React from 'react'
import CreateHead from '../features/createSections/createhead'
import Navbar from "../componets/Navbar"
import CreateThird from '../features/createSections/createthird'
import Footer from "../componets/footer"
import CreateForm from '../features/createSections/createform'

const Create = () => {
  return (
    <div>
        <Navbar />
        <CreateHead />
        <CreateForm />  
        <Footer />
    </div>
  )
}

export default Create