import React from 'react'
import "./Navbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Navbar() {
    return (
        <div className="navbar">
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
                    <div className="hamburger">
                        <span className="line one"></span>
                        <span className="line two"></span>
                        <span className="line three"></span>
                    </div>
                        
                        
                    </div>
                </div>
        </div>
    )
}
