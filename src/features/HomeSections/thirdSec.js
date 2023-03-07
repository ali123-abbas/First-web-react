import React from "react";
import icon02 from "../../assets/img/icon02.png";
import icon04 from "../../assets/img/icon04.png";
import icon06 from "../../assets/img/icon06.png";



export default function ThirdSection() {
    return ( 
      <div className="create-nft">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <div className="section-heading">
                    <div className="line-dec"></div>
                    <h2 className="text-white">Create Your NFT & Put It On The Market </h2> 
                </div>
                </div>
                <div className="col-md-4 text-right">
                    <div className="main-button text-right">
                        <a href="create.html">Create Your NFT Now</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="item first-item">
                        <div className="number">
                              <h6>1</h6>
                        </div>
                        <div className="icon">
                            <img src={icon02} />
                        </div>
                        <h4 className="NFT-heading fw-bold">Set Up Your Wallet</h4>
                        <p className="text-white">NFT means Non-Fungible Token that  are used in digital cryptocurrency markets. 
                            There are many <br /> different kinds of NFTs in the industry. </p>
                          <div className="ver-line"></div>  
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item first-item">
                        <div className="number">
                              <h6>2</h6>
                        </div>
                        <div className="icon">
                            <img src={icon04} />
                        </div>
                        <h4 className="NFT-heading fw-bold">Add Your Digital NFT</h4>
                        <p className="text-white">NFT means Non-Fungible Token that  are used in digital cryptocurrency markets. 
                            There are many <br /> different kinds of NFTs in the industry. </p>
                          <div className="ver-line"></div>  
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item ">   
                        <div className="icon">
                            <img src={icon06} />
                        </div>
                        <h4>Sell Your NFT & Make Profit</h4>
                        <p >NFT means Non-Fungible Token that  are used in digital cryptocurrency markets. 
                            There are many <br /> different kinds of NFTs in the industry. </p>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}