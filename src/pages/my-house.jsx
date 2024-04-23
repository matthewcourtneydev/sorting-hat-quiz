import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HouseIntro from "../components/house-intro";
import RavenclawBadge from "../imgs/ravenclaw-badge.png"
import SlytherinBadge from "../imgs/slytherin-badge.png"
import GryffindorBadge from "../imgs/gryffindor-badge.png"
import Nav from "../components/nav"

const MyHouse = (props) => {
  const navigate = useNavigate();
  const [isIntroOpen, setIsIntroOpen] = useState(true);

  let userInfo = {
    "email": "matt@test.com",
    "password": "test",
    "first": "Matthew",
    "last": "Courtney",
    "house": "hufflepuff",
    "patronus": null,
    "wand": null
  }

  function determinBadge() {
    switch (userInfo.house) {
      case "ravenclaw" : return RavenclawBadge
      case "slytherin" : return SlytherinBadge
      case "gryffindor" : return GryffindorBadge
    }
  }

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
    if(!Object.keys(userInfo).length) {
      navigate("/login")
    }
  }, [])
  return (Object.keys(userInfo).length > 0 &&
    // <div className={`house-${userInfo.house.toLowerCase()} page`}>
    <div className={`house-${userInfo.house.toLowerCase()} page`}>
      <Nav setUserInfo={props.setUserInfo} />
      <div className="portrait">
        <h2>CREAtE YOUR PORtRAIt</h2>
        <button className="start-portrait">START</button>
      </div>
      <h3>{userInfo.first} {userInfo.last}</h3>
      <div className="house-button-container">
      {userInfo.house !== "empty" ? 
              <div className="btn-contain">
              <div className="house-btn" onClick={() => setIsIntroOpen((prev) => !prev)}>
                <img src={determinBadge()} alt="" />
              </div>
              <div className="button-name">HOUSE</div>
              <div className="button-value">{userInfo.house !== "empty" ? userInfo.house : "Unknown"}</div>
            </div>
    
    :
    <div className="btn-contain">
          <button onClick={() => onHouseClick()}>+</button>
          <div className="button-name">HOUSE</div>
          <div className="button-value">{userInfo.house !== "empty" ? userInfo.house : "Unknown"}</div>
        </div>
        }
        <div className="btn-contain">
          <button onClick={() => onPatronusClick()}>+</button>
          <div className="button-name">PATRONUS</div>
          <div className="button-value">{userInfo.patronus || "Unknown"}</div>
        </div>
        <div className="btn-contain">
          <button onClick={() => onWandClick()}>+</button>
          <div className="button-name">WAND</div>
          <div className="button-value">{userInfo.wand || "Unknown"}</div>
        </div>
      </div>
      {userInfo.house !== "empty" && isIntroOpen ? <HouseIntro isIntroOpen={isIntroOpen} setIsIntroOpen={setIsIntroOpen} userInfo={userInfo} /> : <></>}
      <div className="housepageFade"></div>
    </div>
  );
};

export default MyHouse;
