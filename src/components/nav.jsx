import React from 'react';
import WWlogo from "../imgs/ww-logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { GoGear } from "react-icons/go";



const Nav = () => {
    return (
        <nav className="navbar">
            <span><RxHamburgerMenu /></span>
            <img src={WWlogo} className="logo" alt="logo" />
            <span><GoGear /></span>
        </nav>
    );
}

export default Nav;
