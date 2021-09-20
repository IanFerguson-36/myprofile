import React from 'react'
import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active" )}>
            <ul>
                <li>
                    <a href="#bio">Bio</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#tbd">Blank for Future Use</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
