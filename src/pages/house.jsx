import React from "react";
import Nav from "../components/nav"

const House = () => {

  function onHouseClick() {
    console.log("House Clicked")
  }

  function onPatronusClick() {
    console.log("patronus clicked")
  }

  function onWandClick() {
    console.log("wand clicked")
  }
  return (
    <div className="house page">
      <Nav />
      <div className="portrait">
        <h2>CREAtE YOUR PORtRAIt</h2>
        <button className="start-portrait">START</button>
      </div>
      <h3>Matt Courtney</h3>
      <div className="house-button-container">
        <div className="btn-contain">
          <button onClick={() => onHouseClick()}>+</button>
          <div className="button-name">HOUSE</div>
          <div className="button-value">Ravenclaw</div>
        </div>
        <div className="btn-contain">
          <button onClick={() => onPatronusClick()}>+</button>
          <div className="button-name">PATRONUS</div>
          <div className="button-value">Unknown</div>
        </div>
        <div className="btn-contain">
          <button onClick={() => onWandClick()}>+</button>
          <div className="button-name">WAND</div>
          <div className="button-value">Unknown</div>
        </div>
      </div>
      <div className="housepageFade"></div>
      {/* <div className={`page-content ${housename}`} style={BackgroundStyles}>
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
      </div> */}
    </div>
  );
};

export default House;
