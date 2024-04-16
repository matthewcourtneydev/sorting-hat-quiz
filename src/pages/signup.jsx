import { React, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WWLogo from "../imgs/ww-logo.png";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosed } from "react-icons/pi";

const Signup = (props) => {
  const [isPwHidden, setPwHidden] = useState(true);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();

  function handleSignUp() {
    const userObj = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        first: firstRef.current.value,
        last: lastRef.current.value,
        house: "empty",
        patronus: null,
        wand: null
    };

    props.setUserInfo((prev) => userObj);
    const prevLogins = JSON.parse(localStorage.getItem("mdc_sorting_hat_past_logins")) || [];
    debugger;
    localStorage.setItem("mdc_sorting_hat_user_info", JSON.stringify(userObj))
    localStorage.setItem("mdc_sorting_hat_past_logins", JSON.stringify([userObj, ...prevLogins]))
    navigate("/house")
  }

  useEffect(() => {
    if (Object.keys(props.userInfo).length > 0) {
      navigate("/house")
    }
  })
  return (
    <div className="page signup">
      <nav className="login-nav">
        <img src={WWLogo} alt="" />
        <button className="login-nav" onClick={() => navigate("/login")}>LOG IN</button>
      </nav>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="input-field">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input ref={emailRef} type="wmail" />
        </div>
        <div className="input-field">
          <label htmlFor="password">PASSWORD</label>
          <input ref={passwordRef} type={isPwHidden ? "password" : "text"}  id="password" />
<span className="eye" onClick={() => setPwHidden((prev) => !prev)}>{isPwHidden ? <RxEyeOpen /> : <PiEyeClosed />}</span>
        </div>
        <div className="name-container">
          <div className="first">
            <div className="input-field">
              <label htmlFor="first">FIRST NAME</label>
              <input ref={firstRef} type="text" />
            </div>
          </div>
          <div className="last">
            <div className="input-field">
              <label htmlFor="last">LAST NAME</label>
              <input ref={lastRef} type="text" />
            </div>
          </div>
        </div>
        <button className="signup-button" onClick={() => handleSignUp()}>SIGN UP</button>
      </div>
      <hr />
      <h2>Already have an account?</h2>
      <button className="to-login" onClick={() => navigate("/login")}>
        LOG IN
      </button>
    </div>
  );
};

export default Signup;
