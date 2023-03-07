import React from "react";
import authorImg from "../../assets/img/author.jpg";
import featuredImg from "../../assets/img/featured04.jpg";
import discover01 from "../../../src/assets/img/discover01.jpg";
import discoverImg from "../../assets/img/discover02.jpg";
import discover03 from "../../assets/img/discover03.jpg";
import discover04 from "../../assets/img/discover04.jpg";
import { ExpoArr,ExpoArrDouble } from "../../componets/expoArr";

const CardArr = [
  {
    firstHeading: "Mutant Ape Bored",
    secondHeading: "His Other Half",
    CBit: "8.16 ETH",
    category:"Digital Art",
    collection:"2/2",
    End:"25th Nov",

  },
];

const Card2Arr = [
  {
    heading:"Genesis Meta Boom",
    CBit: "5.15 ETH",
    headEnd:"End In",
    EndIn:"25th Nov"
  },
  {
    heading:"Another Half Ape",
    CBit:"6.15 ETH",

  },
  {
    heading:"Pixel Sand Box",
    CBit:"5.15 ETH",

  },
  {
    heading:"Another Half Ape",
    CBit:"5.15 ETH",

  },
  {
    heading:"Invisible NFT Land",
    CBit:"5.15 ETH",

  },
  {
    heading:"Another Half Ape",
    CBit:"5.15 ETH",

  }
]

export const ExpoCardDouble = () => {
  return (
    <div className="discover-cards">
      <div className="container">
        <div className="row justify-content-center">
        <ExpoArr ExpoDetails ={CardArr} />
        </div>
      </div>
    </div>
  );
};
export const ExpoCardSingle = () => {
  return (
    <div className="discover-cards">
      <div className="container">
        <div className="row">
             <ExpoArrDouble ExpoSecDetails = { Card2Arr } />
        </div>
      </div>
    </div>
  );
};
