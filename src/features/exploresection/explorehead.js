import React from "react";
import CardSlider from "../WebSlider/newswiper";



const ExploreHead = () => {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <h6 className="text-white">Liberty NFT Market</h6>
          <h2 className="text-white"> Discover Some Top Items</h2>
          <span>
            Home  <a href="#">Explore</a>{" "}
          </span>
        </div>
      </div>
      <CardSlider />
    </div>

    
    
  );
};

export default ExploreHead;
