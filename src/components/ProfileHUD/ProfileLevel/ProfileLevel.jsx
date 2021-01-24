import React from "react";
import s from "./ProfileLevel.module.css";
const ProfileLevel = (props) => {
  return (
    <div className={s.main}>
      <p className={props.level}>{props.level}</p>
    </div>
  );
};

export default ProfileLevel;
