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

  let BackgroundStyles = {
    background: `radial-gradient(${houseInfo.colors.light}, ${houseInfo.colors.dark}`,
  };
  let headerStyles = {
    color: houseInfo.colors.secondaryLight,
  };

  let buttonStyles = {
    fontSize: "16px",
    backgroundColor: houseInfo.colors.secondaryLight,
    padding: "5px 20px",
    border: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  };

  let lightButtonStyles = {
    fontSize: "16px",
    backgroundColor: houseInfo.colors.secondaryLight,
    padding: "5px 20px",
    border: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    color: houseInfo.colors.light,
  };

  let lightText = {
    color: houseInfo.colors.secondaryLight,
  };

  let darkText = {
    color: houseInfo.colors.secondaryDark,
  };

  return (
    <div className="page">
      <div className="housepageFade"></div>
      <div className={`page-content ${housename}`} style={BackgroundStyles}>
        <p style={headerStyles} className="welcome">
          Welcome to
        </p>
        <h1 style={headerStyles}>{houseInfo.housename}</h1>
        <img src={houseInfo.badgeImg} alt="" className="badge" />
        <div style={headerStyles} className="slogan">
          {houseInfo.slogan}
        </div>
        {houseInfo.housename === "Hufflepuff" ? (
          <>
            <div style={headerStyles} className="information">
              {houseInfo.welcomeMessages.map((paragraph) => {
                return <p style={darkText}>{paragraph.text}</p>;
              })}
            </div>
            <button style={lightButtonStyles} onClick={restartQuiz}>
              Retake Quiz
            </button>
          </>
        ) : (
          <>
            <div style={headerStyles} className="information">
              {houseInfo.welcomeMessages.map((paragraph) => {
                return <p style={lightText}>{paragraph.text}</p>;
              })}
            </div>
            <button style={buttonStyles} onClick={restartQuiz}>
              Retake Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default House;
