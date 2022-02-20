import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  console.log(avatar);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (
        <Avatar className="headerOption-icon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
