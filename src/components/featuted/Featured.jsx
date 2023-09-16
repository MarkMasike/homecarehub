import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
              <h1>Find the perfect Service provider online</h1>
              <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="icon" />
                    <input type='text' placeholder='Try geting a house keeper'/>
                </div>
                <button>Search</button>
              </div>
              <div className="popular">
                <span>Popular:</span>
                <button>Laundry Service</button>
                <button>House Keeping</button>
                <button>Child Care</button>
                <button>Caregiver</button>
              </div>
            </div>
            <div className="right">
                <img src='./img/man.png' alt=''/>                             
            </div>
        </div>
    </div>
  )
}

export default Featured