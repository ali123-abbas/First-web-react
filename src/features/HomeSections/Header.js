import React from "react";
import Slider from "../WebSlider/swiper";



const Header = (props) => {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            
            <div className="header-text">  
            <h6>Liberty NFT Market</h6>
            <h2>
              CREATE, SELL & COLLECT  TOP NFT’S.
            </h2>
            <p>
              Liberty NFT Market is a really cool and professional design for
              your NFT websites. This HTML CSS template is based on Bootstrap v5
              and it is designed for NFT related web portals. Liberty can be
              freely downloaded from TemplateMo's free css templates.
            </p>
            <div className="buttons">
            <div className="border-button">
              <button>Explore Top NFT’S</button>
            </div>
            <div className="main-button">
              <a href="">Watch Our Videos</a>
            </div>
          </div>
          </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
