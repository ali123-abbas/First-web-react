import React, { useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import pic1 from "../assets/img/pic1.jpg";
export default function Card() {
  return (
    <div className="collections">
    <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec">
                <h2>
                  Explore Some Hot <em>Collections</em> In Market
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="owl-collection owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item cloned">
                      <div className="item">
                        <img src={pic1} />
                        <div className="down-content">
                          <h4>Genesis Collective Statue</h4>
                          <span className="collection">
                            Items In Collection: <br />
                            <strong>380/394</strong>
                          </span>
                          <span className="category">
                            Category:
                            <br />
                            <strong>Music Art</strong>
                          </span>
                          <div className="main-button">
                            <a>Explore Genesis</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="previous">
                      {" "}
                      <i class="fa-solid fa-left"> </i>
                    </span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="previous">
                      {" "}
                      <i class="fa-solid fa-right"> </i>
                    </span>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
