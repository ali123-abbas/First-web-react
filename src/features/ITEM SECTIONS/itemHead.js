import React from 'react'

const ItemHead = () => {
  return (
    <div className='page-heading normal-space'>
        <div className='container'>
            <div className='row'>
                 <div className='col-lg-12'>
                    <h6 className=''>Liberty NFT Market</h6>
                    <h2>View Items Details </h2>
                    <span> Home  <a href=''>Item Details</a> 
                    </span>
                    <div className="buttons">
                       <div className="main-button">
                       <a href="">Explore Our Items</a>
                      </div>
                        <div className="border-button">
                        <a href="">Create Your NFT</a>
                      </div>
                   </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ItemHead