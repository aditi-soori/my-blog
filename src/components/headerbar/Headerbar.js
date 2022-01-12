import React from "react";
import "./headerbar.css";

const Headerbar = () => {
    return (
        
        <div className="header">
        <div className= "headleft">
        <i className="headIcons fa-solid fa-cheese"></i>
        TrainOfThoughts
        
        </div>
        <div className="headmid"  >
            <ul className="itemlist">
            <li className="headitems">HOME</li>
            <li className="headitems">ABOUT</li>
            <li className="headitems">CONTACT</li>
            <li className="headitems">WRITE</li>
            <li className="headitems">LOGOUT</li>
            </ul>
        </div>
        <div className="headright">
            <img className="headimg"
            src="https://cdn.dribbble.com/users/124813/screenshots/4805807/media/8378cbd47b8b551cb819c7bb5a8014f9.gif" alt=""/>
            <i class="headSearch fas fa-search"></i>
        </div>
        </div>
        
       
    )
}
export default Headerbar;