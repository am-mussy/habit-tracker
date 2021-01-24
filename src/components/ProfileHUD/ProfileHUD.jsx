import React from "react";
import ProfileExpBar from "./ProfileExpBar/ProfileExpBar";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileLevel from "./ProfileLevel/ProfileLevel";
import s from "./ProfileHUD.module.css";

const ProfileHUD = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <ProfileLevel className={s.level} level={"9"} />
        <ProfileImg img={"lion"} />
        <ProfileExpBar progress={"30%"} />
      </div>
    </div>
  );
};

export default ProfileHUD;
