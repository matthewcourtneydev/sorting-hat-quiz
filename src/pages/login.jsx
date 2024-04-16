import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosed } from "react-icons/pi";


import WWLogo from "../imgs/ww-logo.png";

const Login = (props) => {
const [potentialEmails, setPotentialEmails] = useState(JSON.parse(localStorage.getItem("mdc_sorting_hat_past_logins")) || []);
const [isPwHidden, setPwHidden] = useState(true);
const emailRef = useRef();
const passwordRef = useRef();
const navigate = useNavigate();

function handleLoginIn () {
    let email = emailRef.current.value.toLowerCase();
    let password = passwordRef.current.value;
    const foundEmail = potentialEmails.find((user) => (user.email === email && user.password === password))
    if (foundEmail) {
        debugger;
        props.setUserInfo(foundEmail)
        console.log("USER FOUND");
        navigate("/")
    } else {
        console.log("no user found")
    }
};

let localEmails = JSON.parse(localStorage.getItem("mdc_sorting_hat_past_logins")) || [];
localStorage.setItem("mdc_sorting_hat_past_logins", JSON.stringify([...localEmails.filter((obj) => obj.email !== "demo@gmail.com"), {email: "demo@gmail.com", password: "demo", first: "First", last: "Last", house: "Ravenclaw", patronus: null, wand: "Elder"}]))

useEffect(() => {
    if(Object.keys(props.userInfo).length) {
        navigate("/house")
    }
}, [])
  return (
    <div className="page login">
      <nav className="login-nav">
        <img src={WWLogo} alt="" />
      </nav>
      <h1>Login</h1>
      <div className="login-container">
        <div className="input-field">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input ref={emailRef} type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="password">PASSWORD</label>
          <input ref={passwordRef} type={isPwHidden ? "password" : "text"}  id="password" />
          <span className="eye" onClick={() => setPwHidden((prev) => !prev)}>{isPwHidden ? <RxEyeOpen /> : <PiEyeClosed />}</span>
        </div>
        <a href="#">Forgot password?</a>
        <button className="login" onClick={() => handleLoginIn()}>LOG IN</button>
      </div>
      <hr />
      <h2>Don't have an account?</h2>
      <button className="to-signup" onClick={() => navigate("/signup")}>
        SIGN UP
      </button>
    </div>
  );
};

export default Login;
