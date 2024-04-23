import { React, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiOwl } from "react-icons/gi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import HouseInfo from "../house.json";
import ShieldImg from "../imgs/secondary-shield-slytherin.webp";
import MemberCard from "./member-card";

const HouseIntro = (props) => {
  let houseData = HouseInfo[props.userInfo.house];
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  console.log(props.isIntroOpen ? "true" : "false");
  return (
    <div className={`overlay ${houseData.name.toLowerCase()}-overlay`}>
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
        <button className="share">
          <span>
            <GiOwl />
          </span>
          SHARE YOUR HOUSE
        </button>
      </div>
      <div className="other-house-members">
        <h3>{houseData.membersData.header}</h3>
        <h4>{`Fellow ${houseData.name}s`}</h4>
        <div className="card-container">
          {houseData.membersData.members.map((member) => (
            <MemberCard memberData={member} />
          ))}
        </div>
      </div>
      <div className="prefect-message-container">
        <h2 className="prefect-message">A message from your prefect</h2>
        <h6>By J.K. Rowling</h6>
        <p className="paragraph">
          <span className="first-letter" style={{ color: houseData.color }}>
            {houseData.prefectMessage.firstLetter}
          </span>
          {houseData.prefectMessage.text}

          {isTextExpanded ? (
            <div className="expanded-text">
              {houseData.prefectMessage.expandedText.map((item) => {
                return <p>{item}</p>;
              })}
              <button onClick={() => setIsTextExpanded((prev) => !prev)}>
                Read Less -
              </button>
            </div>
          ) : (
            <div className="expanded-text">
              <button onClick={() => setIsTextExpanded((prev) => !prev)}>
                Read More +
              </button>
            </div>
          )}
        </p>
      </div>
      <div className="last-section">
        <div className="quote-image">
            <BiSolidQuoteSingleLeft />
            <BiSolidQuoteSingleLeft />
        </div>
        <div className="quote-text">
            <p className="quote">{houseData.quote.quote}</p>
            <p className="author">{houseData.quote.author}</p>
            <p className="reference">{houseData.quote.reference}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseIntro;
