import React from 'react'
import '../STYLECSS/Navbar.css'
import { Link,NavLink } from 'react-router-dom'

function Navbar ()  {
  return (
    <nav className='navbar'>
      <div>
      <img src="https://img.icons8.com/?size=80&id=55458&format=png"   alt="LOGO" className='icons' /><span className="royal-text"><img src="../../logo.gif" alt="" style={{height:"70px"}}/></span>
      </div>

    <div className='links'>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Skills">Skills</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Contact">Contact</NavLink>

    </div>
        {/* {links.map((link,id)=>{
        return <Link style={{marginLeft:"10px"}} key={id} to={`${link.toLowerCase()==="home"? "/" : link.toLowerCase()}`}>{link}</Link>
        })} */}
          
    </nav>
  )
}

export default Navbar
