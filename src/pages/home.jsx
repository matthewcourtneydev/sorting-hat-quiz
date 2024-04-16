import React from "react";
import { useNavigate } from "react-router-dom";
import SortingHatImg from "../imgs/sorting-hat.png";
import WWlogo from "../imgs/ww-logo.png";

const Home = (props) => {
  const navigate = useNavigate();

  function startQuiz() {
    debugger;
    if (props.userInfo && Object.keys(props.userInfo).length > 0) {
      console.log("starting quiz");
      navigate("/quiz");
    } else {
      console.log("going to sign up");
      navigate("/signup");
    }
  }

  return (
    <div className="page">
      <div className="page-content">
        <img src={WWlogo} className="logo" alt="logo" />
        <div className="small-screen-home">
          <p className="homePre">
            <span>S</span>ORTING <span>C</span>EREMONY
          </p>
          <h1 className="homeHeader">Discover your Hogwarts House</h1>
          <img src={SortingHatImg} alt="sorting hat" id="sorting-hat-img" />
          <p className="welcomeMessage">
            Don the Sorting Hat to be placed into your rightful Hogwarts house.
            The Sorting Hat's decision is final.
          </p>
          <button className="start-quiz" onClick={startQuiz}>
          START THE SORTING CEREMONY
        </button>
        </div>
        <div className="large-screen-home">
          <div className="left">
            <img src={SortingHatImg} alt="sorting hat" id="sorting-hat-img" />
          </div>
          <div className="right">
            <p className="homePre">
              <span>S</span>ORTING <span>C</span>EREMONY
            </p>
            <h1 className="homeHeader">Discover your Hogwarts House</h1>
            <p className="welcomeMessage">
              Don the Sorting Hat to be placed into your rightful Hogwarts
              house. The Sorting Hat's decision is final.
            </p>
            <button className="start-quiz" onClick={startQuiz}>
          START THE SORTING CEREMONY
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
