import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HouseIntro from "../components/house-intro";
import SettingsMenu from "../components/settings-menu";
import PatronusMenu from "../components/patronus-menu";
import RavenclawBadge from "../imgs/ravenclaw-badge.png";
import SlytherinBadge from "../imgs/slytherin-badge.png";
import GryffindorBadge from "../imgs/gryffindor-badge.png";
import HufflepuffBadge from "../imgs/hufflepuff-badge.png";
import Nav from "../components/nav";
import Otter from "../imgs/otter.webp";

const MyHouse = (props) => {
  const navigate = useNavigate();
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPatronusOpen, setIsPatronusOpen] = useState(false);

  let userInfo = props.userInfo;

  function determinBadge() {
    switch (userInfo.house) {
      case "ravenclaw":
        return RavenclawBadge;
      case "slytherin":
        return SlytherinBadge;
      case "gryffindor":
        return GryffindorBadge;
      case "hufflepuff":
        return HufflepuffBadge;
    }
  }

  function onHouseClick() {
    console.log("House Clicked");
    navigate("/quiz-start");
  }

  function onPatronusClick() {
    navigate("/patronus-quiz-start");
  }

  function onWandClick() {
    console.log("wand clicked");
  }

  useEffect(() => {
    if (!Object.keys(userInfo).length) {
      navigate("/login");
    }
    console.log(userInfo);
  }, []);
  return (
    Object.keys(userInfo).length > 0 && (
      // <div className={`house-${userInfo.house.toLowerCase()} page`}>
      <div
        className={`house-${userInfo.house.toLowerCase()} page`}
        style={isMenuOpen || isIntroOpen ? { overflow: "hidden" } : {}}
      >
        <Nav setUserInfo={props.setUserInfo} setIsMenuOpen={setIsMenuOpen} />
        <div className="my-house-upper">
          <div className="portrait">
            <h2>create your portrait</h2>
            <button className="start-portrait">START</button>
          </div>
          <h3>
            {userInfo.first} {userInfo.last}
          </h3>
          <div className="house-button-container">
            {userInfo.house !== "empty" ? (
              <div className="btn-contain">
                <div
                  className="house-btn"
                  onClick={() => setIsIntroOpen((prev) => !prev)}
                >
                  <img src={determinBadge()} alt="" />
                </div>
                <div className="button-name">HOUSE</div>
                <div className="button-value">
                  {userInfo.house !== "empty" ? userInfo.house : "Unknown"}
                </div>
              </div>
            ) : (
              <div className="btn-contain">
                <button onClick={() => onHouseClick()}>+</button>
                <div className="button-name">HOUSE</div>
                <div className="button-value">
                  {userInfo.house !== "empty" ? userInfo.house : "Unknown"}
                </div>
              </div>
            )}
            {userInfo.patronus ? (
              <div className="btn-contain">
                <div
                  className="house-btn"
                  onClick={() => setIsPatronusOpen((prev) => !prev)}
                >
                  <img src={Otter} alt="" />
                </div>
                <div className="button-name">PATRONUS</div>
                <div className="button-value">
                  {userInfo.house !== "empty" ? userInfo.house : "Unknown"}
                </div>
              </div>
            ) : (
              <div className="btn-contain">
                <button onClick={() => onPatronusClick()}>+</button>
                <div className="button-name">PATRONUS</div>
                <div className="button-value">
                  {userInfo.patronus || "Unknown"}
                </div>
              </div>
            )}
            <div className="btn-contain">
              <button onClick={() => onWandClick()}>+</button>
              <div className="button-name">WAND</div>
              <div className="button-value">{userInfo.wand || "Unknown"}</div>
            </div>
          </div>
          {userInfo.house !== "empty" && isIntroOpen ? (
            <HouseIntro
              isIntroOpen={isIntroOpen}
              setIsIntroOpen={setIsIntroOpen}
              userInfo={userInfo}
            />
          ) : (
            <></>
          )}
          {isMenuOpen ? (
            <SettingsMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              userInfo={userInfo}
            />
          ) : (
            <></>
          )}
                    {isPatronusOpen ? (
            <PatronusMenu
              isPatronusOpen={isPatronusOpen}
              setIsPatronusOpen={setIsPatronusOpen}
              userInfo={userInfo}
            />
          ) : (
            <></>
          )}
          <div className="housepageFade"></div>
        </div>
        <div
          className="my-house-lower"
          style={isMenuOpen || isIntroOpen || isPatronusOpen ? { display: "none" } : {}}
        >
          <p>Things to do</p>
          <div className="button-element">
            <span>
              Find our secret words and unlock exclusive Portrait Maker goodies
            </span>
          </div>
          <div className="button-element">
            <span>Visit the Harry Potter shop</span>
          </div>
          <div className="button-element">
            <span>
              Learn more about the upcoming Harry Potter television series
            </span>
          </div>
          <div className="button-element">
            <span>Visit the Starting Harry Potter hub</span>
          </div>
          <div className="button-element">
            <span>Discover your patronus</span>
          </div>
          <div className="button-element">
            <span>
              Welcome to Ollivanders: Makers of Fine Wands since 382 BC
            </span>
          </div>
          <p className="starter-pack">your {userInfo.house} starterpack</p>
          <div className="button-element">
            <span>
              Find our secret words and unlock exclusive Portrait Maker goodies
            </span>
          </div>
          <div className="button-element">
            <span>Visit the Harry Potter shop</span>
          </div>
          <div className="button-element">
            <span>
              Learn more about the upcoming Harry Potter ttelevision series
            </span>
          </div>
          <div className="button-element">
            <span>Visit the Starting Harry Potter hub</span>
          </div>
          <div className="button-element">
            <span>Discover your patronus</span>
          </div>
          <div className="button-element">
            <span>
              Welcome to Ollivanders: Makers of Fine Wands since 382 BC
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default MyHouse;
