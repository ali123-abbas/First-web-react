import React from "react";
import authorImg from "../assets/img/author.jpg";
import discover01 from "../assets/img/discover01.jpg";
import discoverImg from "../assets/img/discover02.jpg";
import discover03 from "../assets/img/discover03.jpg";
import discover04 from "../assets/img/discover04.jpg";

const ExpoArr = (props) => {
  const { ExpoDetails } = props;
  return ExpoDetails.map((value, index) => {
    return (
      <div className="col-lg-8">
        <div className="item">
          <div className="row">
            <div className="col-lg-12">
              <span className="banner">Double Item</span>
            </div>

            <div className="col-lg-6 col-sm-6">
              <span className="author">
                <img
                  src={authorImg}
                  style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <img src={discover01} style={{ borderRadius: "20px" }} />
              <h4 className="text-white">{value.firstHeading}</h4>
            </div>

            <div className="col-lg-6 col-sm-6">
              <span className="author">
                <img
                  src={authorImg}
                  style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <img src={discoverImg} style={{ borderRadius: "20px" }} />
              <h4 className="text-white">{value.secondHeading}</h4>
            </div>

            <div className="col-lg-12">
              <div className="line-dec"></div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <span>
                    Current Bid: <br />
                    <strong> {value.CBit} </strong>
                  </span>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <span>
                    {" "}
                    Category: <br />
                    <strong> {value.category} </strong>
                  </span>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <span>
                    {" "}
                    Collection: <br />
                    <strong>{value.collection}</strong>
                  </span>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <span>
                    {" "}
                    Ends In: <br />
                    <strong> {value.End} </strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="main-button">
                <a href=""> View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const  ExpoArrDouble = (props) => {
    const { ExpoSecDetails } = props;
    return ExpoSecDetails.map((value, index) => {
        return (
            <div className="col-lg-4">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <span className="author">
                    <img
                      src={authorImg}
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                  <img src={discover04} style={{ borderRadius: "20px" }} />
                  <h4 className="text-white">{value.heading}</h4>
                </div>
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>
                      Current Bid
                      <br />
                      <strong>{value.CBit}</strong>
                    </span>
                  </div>
                  <div className="col-6 text-left">
                    <span className="text-left">
                      Ends In:
                      <br />
                      <strong> 26th Nov</strong>
                    </span>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href=""> View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    });
};



export { ExpoArr, ExpoArrDouble };
