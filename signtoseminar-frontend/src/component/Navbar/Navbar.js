import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="topnav">
          <div className="topnav__left">
            
            <Link to="/"> Home </Link>
            <Link to="/seminar"> Seminarie </Link>
            <Link to="/about"> About </Link>
            {/* <a href="seminarie.html">Seminarie</a> */}
          
        </div>
        <div className="topnav__right">       
          <Link to="/login">Login</Link>
        </div>
      
        
        </div>
     
        
    )
}

export default Navbar
