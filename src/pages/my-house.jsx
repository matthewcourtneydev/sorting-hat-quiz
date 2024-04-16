import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav"

const MyHouse = (props) => {
  const navigate = useNavigate();

  function onHouseClick() {
    console.log("House Clicked");
    navigate("/quiz-start")
  }

  function onPatronusClick() {
    console.log("patronus clicked")
  }

  function onWandClick() {
    console.log("wand clicked")
  }

  useEffect(() => {
    if(!Object.keys(props.userInfo).length) {
      navigate("/login")
    }
  }, [])
  return (Object.keys(props.userInfo).length > 0 &&
    // <div className={`house-${props.userInfo.house.toLowerCase()} page`}>
    <div className={`house-${props.userInfo.house.toLowerCase()} page`}>
      <Nav setUserInfo={props.setUserInfo} />
      <div className="portrait">
        <h2>CREAtE YOUR PORtRAIt</h2>
        <button className="start-portrait">START</button>
      </div>
      <h3>{props.userInfo.first} {props.userInfo.last}</h3>
      <div className="house-button-container">
        <div className="btn-contain">
          <button onClick={() => onHouseClick()}>+</button>
          <div className="button-name">HOUSE</div>
          <div className="button-value">{props.userInfo.house !== "empty" ? props.userInfo.house : "Unknown"}</div>
        </div>
        <div className="btn-contain">
          <button onClick={() => onPatronusClick()}>+</button>
          <div className="button-name">PATRONUS</div>
          <div className="button-value">{props.userInfo.patronus || "Unknown"}</div>
        </div>
        <div className="btn-contain">
          <button onClick={() => onWandClick()}>+</button>
          <div className="button-name">WAND</div>
          <div className="button-value">{props.userInfo.wand || "Unknown"}</div>
        </div>
      </div>
      <div className="housepageFade"></div>
    </div>
  );
};

export default MyHouse;
