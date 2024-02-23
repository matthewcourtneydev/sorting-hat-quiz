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
        <p>Sorting Ceremony</p>
        <h1>Discover Your Hogwarts House</h1>
        <img src={SortingHatImg} alt="sorting hat" id="sorting-hat-img" />
        <p>
          Step up to the challenge and let the Sorting Hat determine your
          rightful place in one of Hogwarts' esteemed houses. Remember, the
          Sorting Hat's decision is absolute.
        </p>
        <button onClick={startQuiz}>Start the Sorting</button>
      </div>
    </div>
  );
};

export default Home;
