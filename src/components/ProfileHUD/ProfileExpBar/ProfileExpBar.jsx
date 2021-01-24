import React from "react";
import s from "./ProfileExpBar.module.css";

const ProfileExpBar = (props) => {
  return (
    <div className={s.main}>
      <div style={{ width: props.progress }} className={s.progress}>
        <p> </p>
      </div>
    </div>
  );
};

export default ProfileExpBar;
