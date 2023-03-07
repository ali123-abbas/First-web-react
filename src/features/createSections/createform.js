import React from 'react'
import ItemPic from "../../assets/img/itemPic.jpg";
import Reality from "../../assets/img/reality.jpg";

const CreateForm = () => {
  return (
  
        <div className="item-details-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec"> </div>
                <h2>
                Apply For <em> Your Item</em> Here.
              </h2>
            </div>
          </div>
          <div className='col-lg-12'>
            <form id='contact' action method='post'>
               <div className='row'>
                <div className='col-lg-4'>
                    <fieldset>
                        <label for="title">Item Title:</label>
                        <input  id='title' placeholder='Ex. Lyon King' autoComplete='on' required></input>
                    </fieldset>
                </div>
                <div className='col-lg-4'>
                    <fieldset>
                        <label for="title">Description For Item:</label>
                        <input  id='title' placeholder='Give us your idea' autoComplete='on' required></input>
                    </fieldset>
                </div>
                <div className='col-lg-4'>
                    <fieldset>
                        <label for="title">Your Username:</label>
                        <input  id='title' placeholder='Ex.@alansmithee' autoComplete='on' required></input>
                    </fieldset>
                </div>
                <div className='col-lg-6'>
                    <fieldset>
                        <label for="title">Price of Item:</label>
                        <input  id='title' placeholder='Price depends on quality. Ex. 0.06 ETH' autoComplete='on' required></input>
                    </fieldset>
                </div>
                <div className='col-lg-6'>
                    <fieldset>
                        <label for="title">Royalties</label>
                        <input  id='title' placeholder='Common royalties 1-25%' autoComplete='on' required></input>
                    </fieldset>
                </div>
                <div className='col-lg-4'>
                    <fieldset>
                        <label for="file">Your File:</label>
                       <input type='file' id="file" name='myfiles[]' multiple />
                    </fieldset>
                </div>
                <div className='col-lg-8'>
                <fieldset>
                       <button type='submit' id="form-submit" className='orange-button'>Submit Your Applying</button>
                    </fieldset>
                </div>
               </div>
            </form>
            <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec"> </div>
                <h2> This Is<em>Your Item</em>Preview.</h2>
            </div>
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

          <div className="col-lg-5 ">
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
          </div>
          </div>
    </div>

  )
}

export default CreateForm