import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import WWLogo from "../imgs/ww-logo.png";

const Signup = (props) => {
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
        house: null,
        patronus: null,
        wand: null
    };

    props.setUserInfo((prev) => userObj);
    localStorage.setItem("mdc_sorting_hat_user_info", JSON.stringify(userObj))
    localStorage.setItem("mdc_sorting_hat_past_logins", JSON.stringify([userObj, ...JSON.parse(localStorage.getItem("mdc_sorting_hat_past_logins"))]))
    navigate("/house")
  }
  return (
    <div className="page signup">
      <nav className="login-nav">
        <img src={WWLogo} alt="" />
      </nav>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="input-field">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input ref={emailRef} type="wmail" />
        </div>
        <div className="input-field">
          <label htmlFor="password">PASSWORD</label>
          <input ref={passwordRef} type="password" />
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
