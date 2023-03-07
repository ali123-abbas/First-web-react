import React from "react";
import market01 from "../../assets/img/market01.jpg";
import author from "../../assets/img/author.jpg";
import "../../../src/App.js";
import HomeCard from "../../componets/homeCard";

const cardsArr = [
  {
    title: "Digital Crypto Artwork",
    description: "helo world",
    artist: "Liberty Artist",
    artistBy: "@Libertyart",
    bid: "2.03 ETH",
    dollar: "$8,240.50",
    endIn: "4D 08H 15M 42S",
    endInDate: "July 24th, 2022",
  },
  {
    title: "Blockchain Item One",
    description: "helo world",
    artist: "Liberty Artist",
    artistBy: "@Libertyart",
    bid: "2.03 ETH",
    dollar: "$7,200.50",
    endIn: "2D 06H 30M 25S",
    endInDate: "July 26th, 2022",
  },
  {
    title: "Virtual Currency Art",
    description: "helo world",
    artist: "Liberty Artist",
    artistBy: "@Libertyart",
    bid: "3.64 ETH",
    dollar: "$6,600.50",
    endIn: "6D 05H 40M 50S",
    endInDate: "July 28th, 2022",
  },
  {
    title: "Digital Art Item",
    description: "helo world",
    artist: "Liberty Artist",
    artistBy: "@Libertyart",
    bid: "2.44 ETH",
    dollar: "$8,800.50",
    endIn: "3D 05H 20M 58S",
    endInDate: "July 14th, 2022",
  },
];

export const FourSection = () => {
  return (
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h2 className="text-white">
                <em> Items </em> Currently In The Market{" "}
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="filters">
              <ul>
                <li data-filter="*" className="active">
                  All Items
                </li>
                <li data-filter=".msc">Music Art</li>
                <li data-filter=".dig">Digital Art</li>
                <li data-filter=".blc">Blockchain</li>
                <li data-filter=".vtr">Virtual</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row grid">
              <HomeCard cardDetails={cardsArr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
