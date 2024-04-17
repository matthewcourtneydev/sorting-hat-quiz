import React from "react";
import { RxCross1 } from "react-icons/rx";
import { GiOwl } from "react-icons/gi";
import HouseInfo from "../house.json";
import ShieldImg from "../imgs/secondary-shield-slytherin.webp";

const HouseIntro = (props) => {
  let houseData = HouseInfo[props.userInfo.house];
  return (
    <div className="overlay">
      <span onClick={() => props.setIsIntroOpen((prev) => !prev)}>
        <RxCross1 />
      </span>
      <p className="house-words">{houseData.words}</p>
      <h1>{houseData.name}</h1>
      <div className="triangle">+++</div>
      <div className="house-welcome">welcome to {houseData.name}</div>
      <p className="paragraph">
        <span className="first-letter" style={{ color: houseData.color }}>
          {houseData.firstLetter}
        </span>
        {houseData.text}
      </p>
      <div className="secondary">
        <img src={ShieldImg} alt="" />
        <h2>the sorting hat has spoken!</h2>
        <p>and you're not alone</p>
        <button className="share"><span><GiOwl /></span>SHARE YOUR HOUSE</button>
      </div>
      <div className="other-house-members">
        <h3>cunning and determination</h3>
        <h4>Fellow Slytherins</h4>
        <div className="card-container">
            
        </div>
      </div>
    </div>
  );
};

export default HouseIntro;
