import React from 'react'
import "./Navbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Navbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#bio"className="logo"> Ian Ferguson </a>
                    <div className="itemcontainer">
                        <Person className="icon"/>
                        <span>678-447-9596</span>
                        </div>
                        <div className="itemcontainer">
                        <Mail className="icon"/>
                        <span>ian.ferg36@gmail.com</span>
                </div>
                
            </div>
            <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                        
                        
                    </div>
                </div>
        </div>
    )
}
