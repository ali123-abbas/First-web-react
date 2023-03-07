import React from "react";
import Navbar from "../componets/Navbar";
import Header from "../features/HomeSections/Header";
import SecondSection from "../features/HomeSections/secondSec";
import ThirdSection from "../features/HomeSections/thirdSec";
import { FourSection } from "../features/HomeSections/fourSection";
import Footer from "../componets/footer";


const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Header finalState={testFunction}/>
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <Footer />
    
    </div>
  );
};

export default Home;
