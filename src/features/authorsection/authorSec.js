import React from "react";
import sinauthor from "../../assets/img/sinauthor.jpg";
import authorImg from "../../assets/img/author.jpg";
import featuredImg from "../../assets/img/featured04.jpg";
import discover02 from "../../assets/img/discover02.jpg";
import discover03 from "../../assets/img/discover03.jpg";
import discover06 from "../../assets/img/discover06.jpg";
import discover04 from "../../assets/img/discover04.jpg";
import icon02 from "../../assets/img/icon02.png";
import icon04 from "../../assets/img/icon04.png";
import icon06 from "../../assets/img/icon06.png";

const AuthorSec = () => {
  return (
   
    <div className="author-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="author">
              <img
                src={sinauthor}
                style={{ borderRadius: "50%", maxWidth: "170px" }}
              />
              <h4 className="text-white">
                {" "}
                Melanie Smith
                <br />
                <a href="#">@melanie32</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-info">
              <div className="row">
                <div className="col-4">
                  <div className="info-item">
                    <i className="fa fa-heart"></i>
                    <h6>
                      1238
                      <em> Likes </em>
                    </h6>
                  </div>
                </div>
                <div className="col-4">
                  <div className="info-item">
                    <i className="fa fa-hand"></i>
                    <h6>
                      1238
                      <em> Likes </em>
                    </h6>
                  </div>
                </div>
                <div className="col-4">
                  <div className="info-item">
                    <i className="fa fa-dollar"></i>
                    <h6>
                      1238
                      <em> Likes </em>
                    </h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <h5> 559 Followers </h5>
                  </div>

                  <div
                    className="col-7"
                    style={{ flex: "0 0 auto", width: "58.333%" }}
                  >
                    <div className="main-button">
                      <a href="">Follow @melanie32</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h2 className="">
                {" "}
                Melanie Smith’s <em>Items</em>{" "}
              </h2>
            </div>
          </div>

          <div className="col-lg-3">
        <div className="item">
          <div className="row">
            <div className="col-lg-12">
              <span className="author">
                <img src={authorImg}  style={{maxWidth:"50px", maxHeight:"50px" , borderRadius:"50%"}} />
              </span>
              <img src={discover03} style={{borderRadius:"20px"}} />
              <h4 className="text-white">Genesis Meta Boom</h4>
            </div>
            <div className="line-dec"></div>
            <div className="row">
              <div className="col-6">
                <span>
                  Current Bid
                  <br />
                  <strong> 5.15 ETH</strong>
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

      <div className="col-lg-3">
        <div className="item">
          <div className="row">
            <div className="col-lg-12">
              <span className="author">
                <img src={authorImg} style={{maxWidth:"50px", maxHeight:"50px" , borderRadius:"50%"}} />
              </span>
              <img src={discover03} style={{borderRadius:"20px"}} />
              <h4 className="text-white">Genesis Meta Boom</h4>
            </div>
            <div className="line-dec"></div>
            <div className="row">
              <div className="col-6">
                <span>
                  Current Bid
                  <br />
                  <strong> 5.15 ETH</strong>
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
      <div className="col-lg-3">
        <div className="item">
          <div className="row">
            <div className="col-lg-12">
              <span className="author">
                <img src={authorImg} style={{maxWidth:"50px", maxHeight:"50px" , borderRadius:"50%"}} />
              </span>
              <img src={discover04}  style={{borderRadius:"20px"}}/>
              <h4 className="text-white">Another Half Ape</h4>
            </div>
            <div className="line-dec"></div>
            <div className="row">
              <div className="col-6">
                <span>
                  Current Bid
                  <br />
                  <strong> 5.15 ETH</strong>
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

      <div className="col-lg-3">
        <div className="item">
          <div className="row">
            <div className="col-lg-12">
              <span className="author">
                <img src={authorImg}  style={{maxWidth:"50px", maxHeight:"50px" , borderRadius:"50%"}} />
              </span>
              <img src={discover03}  style={{borderRadius:"20px"}} />
              <h4 className="text-white">Pixel Sand Box</h4>
            </div>
            <div className="line-dec"></div>
            <div className="row">
              <div className="col-6">
                <span>
                  Current Bid
                  <br />
                  <strong> 5.15 ETH</strong>
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

        </div>
      </div>
      
      




      
    </div>
  );
};

export default AuthorSec;
