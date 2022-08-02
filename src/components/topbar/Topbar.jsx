import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, {useState, useEffect} from 'react';

function Topbar( {menuOpen, setMenuOpen} ) {


    return (
        <div className= {"topbar " + (menuOpen && "active")}>

            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Simon M.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+40 771 70 4641</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>simonmaghiar@yahoo.com</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon"/>
                        <span><a href="https://www.linkedin.com/in/simon-maghiar-2294b6137/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                    </div>
                </div>

                <div className="right">
                        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Topbar
