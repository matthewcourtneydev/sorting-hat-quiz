import { React, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SettingsMenu = (props) => {
  return (
    <div className={`settings-menu ${props.userInfo.house}-overlay`}>
      <span onClick={() => props.setIsMenuOpen((prev) => !prev)}>
        <RxCross1 />
      </span>
      <h2>Account Settings</h2>

      <h3>Name</h3>
      <p>{props.userInfo.first} {props.userInfo.last}</p>
      <h3>Email Address</h3>
      <p>{props.userInfo.email}</p>
      <h3>Password</h3>
      <p>{props.userInfo.password}</p>

      <hr />

      <h2>Membership Settings</h2>
      <h3>Date you joined</h3>
      <p>{props.userInfo.joined}</p>
    </div>
  );
};

export default SettingsMenu;
