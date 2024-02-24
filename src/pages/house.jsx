import React from "react";
import { useNavigate } from "react-router-dom";
import houseData from "../house.json";

const House = () => {
  const housename = localStorage.getItem("hogwartsHouseName");
  const navigate = useNavigate();
  let houses = houseData[0];
  const houseInfo = houses[housename];

  function restartQuiz() {
    localStorage.removeItem("hogwartsHouseName");
    navigate("/");
  }

  let backgroundString = `radial-gradient(${houseInfo.colors.light}, ${houseInfo.colors.dark}`;
  let BackgroundStyles = {
    background: backgroundString,
  };
  let headerStyles = {
    color: houseInfo.colors.secondaryLight,
  };

  return (
    <div className="page">
      <div className="housepageFade"></div>
      <div className={`page-content ${housename}`} style={BackgroundStyles}>
        <p style={headerStyles}>Welcome to</p>
        <h1 style={headerStyles}>{houseInfo.housename}</h1>
        <img src={houseInfo.badgeImg} alt="" className="badge" />
        <button onClick={restartQuiz}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default House;
