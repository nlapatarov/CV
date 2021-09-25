import React from 'react';
import myPhoto from "../../assets/myPhoto.jpg"
import "./header.scss";


function Header() {
    return (
        <div className="headerContainer">
            <h1 className="headingContainer">Nikolay Lapatarov</h1>
            <p className="paragraphContainer">Front End Developer</p>
            <img src={myPhoto} alt="" className="personalPhoto" />
        </div>
    )
}

export default Header
