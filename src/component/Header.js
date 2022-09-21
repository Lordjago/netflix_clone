import React, { useState } from "react";
import Features from "./Features";
import logo from "../netlogo.png";
import { Link } from "react-router-dom";

export default function Header({type}) {
    const [isScrolled, setScrolled] = useState(false)

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
  <div className="navbar">
    <div className={isScrolled ? "header scrolled" : "header"}>
      <div className="right">
        <img src={logo} alt="HeaderImg" className="headerImg" />
        <Link to="/" className="link"><span>Home</span></Link>
        <Link to="/series" className="link"><span>TV Show</span></Link>
        <Link to="/movies" className="link"><span>Movies</span></Link>
        <Link to="" className="link"><span>New and Popular</span></Link>
        <Link to=""  className="link"><span>My List</span></Link>
      </div>
      <div className="left">
        <i className="bi bi-search"></i>
        <span>KID</span>
        <i className="bi bi-bell"></i>
        <img src="https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-16.jpg?p=1" alt="Software" />
        <i className="bi bi-caret-down" style={{marginRight: '30px'}}></i>
        {/* <ul style={{display: 'none'}}>
            <li>Settings</li>
            <li>Logout</li>
        </ul> */}
      </div>
    </div>
    <Features  type={type} />
  </div>
    
  );
}
