import React from "react";
import market01 from "../assets/img/market01.jpg";
import author from "../assets/img/author.jpg";

const HomeCard = (props) => {
  const { cardDetails } = props;
  return cardDetails.map((value, index) => {
    return (
      <div className="col-lg-6 currently-market-item all msc">
        <div className="item">
          <div className="left-image">
            <img
              src={market01}
              style={{
                borderRadius: "20px",
                minWidth: "195px",
                width: "100%",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="right-content">
            <h4 className="text-white"> {value.title} </h4>
            <span className="author">
              <img
                src={author}
                style={{ borderRadius: "50%", maxWidth: "50px" }}
              />
              <h6>
                {value.artist}
                <br /> <a href="#">{value.artistBy}</a>{" "}
              </h6>
            </span>
            <div className="line-dec"> </div>
            <span className="bid">
              Current Bid
              <br />
              <strong>{value.bid}</strong>
              <br />
              <em>({value.dollar})</em>
            </span>
            <span className="ends">
              Ends In
              <br />
              <strong>{value.endIn}</strong>
              <br />
              <em>({value.endInDate})</em>
            </span>
            <div className="text-button">
              <a href="details.html">View Item Details</a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default HomeCard;
