import React from "react";
import icon01 from "../../assets/img/icon01.png";
import icon02 from "../../assets/img/icon02.png";
import icon03 from "../../assets/img/icon03.png";
import icon04 from "../../assets/img/icon04.png";
import icon05 from "../../assets/img/icon05.png";
import icon06 from "../../assets/img/icon06.png";
import Card from "../../componets/card";
import OwlCarousel from "react-owl-carousel";
import pic1 from "../../assets/img/pic1.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../../src/owl.css";

export default function SecondSection() {
  return (
    <div className="categories-collections">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="categories">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <div className="line-dec"></div>
                    <h2>
                      Browse Through Our <em> Categories </em> "Here"{" "}
                    </h2>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon">
                      <img src={icon01} />
                    </div>
                    <h4> Blockchain </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon">
                      <img src={icon02} />
                    </div>
                    <h4 className="text-white"> Digital Art </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon">
                      <img src={icon03} />
                    </div>
                    <h4 className="text-white"> Music Art </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon">
                      <img src={icon04} />
                    </div>
                    <h4 className="text-white "> Virtual World </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon ">
                      <img src={icon05} />
                    </div>
                    <h4 className="text-white"> valuable </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                  <div className="item">
                    <div className="icon ">
                      <img src={icon06} />
                    </div>
                    <h4 className="text-white"> Triple NFT </h4>
                    <div className="icon-button">
                      <a href="#">
                        {" "}
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="collections">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <div className="line-dec"></div>
                    <h2>
                      Explore Some Hot <em>Collections</em> In Market
                    </h2>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div class="container">
                    <OwlCarousel
                      items={3}
                      className="owl-theme"
                      loop
                      nav
                      margin={30}
                    >
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
                     
                
                    </OwlCarousel>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
