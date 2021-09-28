import React from 'react'
import "./Bio.scss"

export default function Bio() {
    return (
        <div className="bio" id="bio">
            <div className="left">
                <div className="imgcontainer">
                    <img src="./assets/image0.jpeg " alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! I'm Ian Ferguson, and I'm a software engineer. This website was created with React.js-
                        <br></br>
                            I graduated from the University of Georgia in 2019 with a degree in Entertainment Media Studies. <br /> After a gap year and the pandemic I discovered I had a passion for coding and graduated from <br/> Georgia Tech's 
                        full stack bootcamp in June of 2021.
                    </h2>
                    </div>
                    <a href="#portfolio">
                        <img src="assets/downarrow.png" alt=""></img>
                    </a>
            </div>
        </div>
    )
}
