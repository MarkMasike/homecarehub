import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active,setActive] = useState(false);
  const [open,setOpen]= useState(false);
  
  const {pathname} = useLocation()
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
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to="/" className='link'>
                <span className='text'>Homecarehub</span>
              </Link>
              <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Explore</span>
                <span>Kiswahili</span>
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
                            <Link to="/myGigs" className='link'>Gigs</Link>
                            <Link to="/add" className='link'>Add New Gig</Link>
                          </>
                        )}
                        <Link to="/orders" className='link'>Orders</Link>
                        <Link to="/messages" className='link'>Messages</Link>
                        <Link to="/logout" className='link'>Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        {
          (active || pathname !=="/" ) &&(
          <>   
   <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Laundry Work Services
            </Link>
            <Link className="link menuLink" to="/">
              House Keeping
            </Link>
            <Link className="link menuLink" to="/">
              Cooking & Catering Services
            </Link>
            <Link className="link menuLink" to="/">
              Child Care
            </Link>
            <Link className="link menuLink" to="/">
              Child Tutoring
            </Link>
            <Link className="link menuLink" to="/">
              Caregiving
            </Link>
            <Link className="link menuLink" to="/">
             Gardening
            </Link>
            <Link className="link menuLink" to="/">
              General House Work
            </Link>
          </div>
          <hr />
          </>
          )
        }
     
    </div>
  )
}

export default Navbar