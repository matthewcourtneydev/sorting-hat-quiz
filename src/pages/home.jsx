import React from "react";
import { useNavigate } from "react-router-dom";
import SortingHatImg from "../imgs/sorting-hat.png";

const Home = () => {
  const navigate = useNavigate();

  function startQuiz() {
    console.log("starting quiz");
    navigate("/quiz");
  }

  return (
    <div className="page">
      <div className="page-content">
        <p className="homePre">SORTING CEREMONY</p>
        <h1 className="homeHeader">Discover Your Hogwarts House</h1>
        <img src={SortingHatImg} alt="sorting hat" id="sorting-hat-img" />
        <p className="welcomeMessage">
        Don the Sorting Hat to be placed into your rightful Hogwarts house. The Sorting Hat's decision is final.
        </p>
        <button className="start-quiz" onClick={startQuiz}>START THE SORTING CEREMONY</button>
      </div>
    </div>
  );
};

export default Home;
