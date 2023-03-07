import React from "react";
import ItemPic from "../../assets/img/itemPic.jpg";
import Reality from "../../assets/img/reality.jpg";
import current01 from "../../assets/img/current01.jpg";
import current02 from "../../assets/img/current02.jpg";
import current03 from "../../assets/img/current03.jpg";
import current04 from "../../assets/img/current04.jpg";
import icon02 from "../../assets/img/icon02.png";
import icon04 from "../../assets/img/icon04.png";
import icon06 from "../../assets/img/icon06.png";

const ItemSec = () => {
  return (
    <div className="item-details-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec"> </div>
                <h2 className="text-center">
                View Details
                <em >
               
                  For Item
                </em>
                Here.
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="left-image">
              <img
                src={ItemPic}
                style={{
                  borderRadius: "20px",
                  marginRight: "30px",
                  width: "100%",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          <div className="col-lg-5 align-self-center">
            <h4 className="text-white"> Dolores Haze Westworld Eye</h4>
            <span className="author">
              <img
                src={Reality}
                style={{ maxWidth: "50px", borderRadius: "50%" }}
              />
              <h6>
                Liberty Artist <br />
                <a href="#">@libertyart</a>
              </h6>
            </span>
            <p className="text-white">
              {" "}
              Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            .
            <div className="row">
              <div className="col-3">
                <span className="bid">
                  Current Bid <br />
                  <strong>6.06 ETH</strong>
                  <br />
                  <em>($8,025.50)</em>
                </span>
              </div>

              <div className="col-4">
                <span className="owner">
                  Owner <br />
                  <strong>David Walker</strong>
                  <br />
                  <em>(@davidwalker)</em>
                </span>
              </div>

              <div className="col-5">
                <span className="ends">
                  Ends In <br />
                  <strong>3D 05H 20M 58S</strong>
                  <br />
                  <em>(January 22nd, 2021)</em>
                </span>
              </div>

              <form action="submit">
                <label for="quatity-text" className="text-white">
                  {" "}
                  Place Bid:{" "}
                </label>
                <input placeholder="1 ETH" className="quatity-text" />
                <button type="submit" id="form-submit" className="main-button">
                  Submit Now
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="current-bid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mini-heading">
                      <h4 className="text-white">
                        Current Biddings Prices ( ETH )
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <select
                        id="chooseCatagory"
                        type="text"
                        name="Category"
                        className="form-select"
                        aria-label="Default-select example"
                        placeholder="Type Something"
                      >
                        <option className="fw-bold" selected>
                          Sort By: Latest
                        </option>
                        <option type="checkbox" name="option1" value="Music">
                          {" "}
                          Sort By: Oldest
                        </option>
                        <option value="Digital">Sort By: Lowest</option>
                        <option value="Blockchain">Sort By: Highest</option>
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current01} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current02} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current03} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current04} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current01} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="item">
                      <div className="left-img">
                        <img src={current02} />
                      </div>
                      <div className="right-content">
                        <h4 className="text-white">David Walker</h4>
                        <a href="#">@davidwalker</a>
                        <div className="line-dec"></div>
                        <h6 className="text-white">
                          Bid: <em>0.06 ETH</em>{" "}
                        </h6>
                        <span className="date">24/07/2022, 22:00</span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
         
    
   
    </div>
  );
};

export default ItemSec;
