import React from 'react'
import Navbar from "../componets/Navbar";
import ExploreHead from "../../src/features/exploresection/explorehead";
import Expo2 from "../../src/features/exploresection/exploresec";
import Expo3 from "../../src/features/exploresection/expo3";
import Footer from '../componets/footer';


const Explore = () => {
  return (
    <div>
        <Navbar />
        <ExploreHead />
        <Expo2 />
        <Expo3 /> 
        <Footer />

    </div>
  )
}

export default Explore