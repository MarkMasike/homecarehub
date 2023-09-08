import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
              {/* <Link to="/"> */}
                <span className='text'>Homecarehub</span>
              {/* </Link> */}
              <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a seller</span>
                <button>Join</button>
            </div>
        </div>
        <hr />
        <div className="menu">
            <span>Test 1 </span>
            <span>Test 2 </span>
            <span>Test 2 </span>
        </div>
    </div>
  )
}

export default Navbar