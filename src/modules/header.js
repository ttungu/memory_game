import React from "react";
import logo from "../images/logo.png"
import background from "../images/logo-background.jpg"

function Header() {
    return(
        <div className="header" style={{backgroundImage: `url(${background})`}}>
            
            <img className="logo" src={logo} alt="One-piece logo"></img>
            <h2>Memory game</h2>
        </div>
    )
}

export default Header;