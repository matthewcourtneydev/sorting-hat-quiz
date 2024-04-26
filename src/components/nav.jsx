import React from 'react';
import { useNavigate } from 'react-router-dom';
import WWlogo from "../imgs/ww-logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { GoGear } from "react-icons/go";

const Nav = (props) => {
    const navigate = useNavigate()
    function handleLogOut() {
        localStorage.setItem("mdc_sorting_hat_user_info", {})
        props.setUserInfo((prev) => {})
        navigate("/")
    }
    return (
        <nav className="navbar">
            <span><RxHamburgerMenu /></span>
            <img src={WWlogo} className="logo" alt="logo" />
            <span><GoGear onClick={() => props.setIsMenuOpen((prev) => true)} /></span>
        </nav>
    );
}

export default Nav;
