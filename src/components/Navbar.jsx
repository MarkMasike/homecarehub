import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
// import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active,setActive] = useState(false);
  const [open,setOpen]= useState(false);

const isActive =()=>{
  window.scrollY > 0 ? setActive(true) :setActive(false)
}
useEffect(()=>{
  window.addEventListener('scroll',isActive);

  return()=>{
    window.addEventListener('scroll',isActive)
  }
},[])

const currentUser ={
  id:1,
  username:"John Doe",
  isSeller:true
}

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
                {!currentUser?.isSeller && <span>Become a seller</span>}  
                {currentUser && <button>Join</button>}
                {currentUser &&(
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <img src='https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg' alt='profile'/>
                    <span>{currentUser?.username}</span>
                    { open && <div className="options">
                       {
                        currentUser?.isSeller &&(
                          <>
                            <span>Gigs</span>
                            <span>Add New Gig</span>
                          </>
                        )}
                        <span>Orders</span>
                        <span>Messages</span>
                        <span>Logout</span>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        {
          active &&(
          <>   
            <hr />
            <div className="menu">
              <span>Test 1 </span>
              <span>Test 2 </span>
              <span>Test 2 </span>
            </div>
          </>)
        }
     
    </div>
  )
}

export default Navbar