import React from "react";
import ProfileExpBar from "./ProfileExpBar/ProfileExpBar";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileLevel from "./ProfileLevel/ProfileLevel";
import s from "./ProfileHUD.module.css";

const ProfileHUD = (props) => {
 
  let hudData = props.hudData;

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <ProfileLevel className={s.level} level={hudData.level} />
        <ProfileImg img={hudData.img} />
        <ProfileExpBar progress={hudData.progress} />
      </div>
    </div>
  );
};

export default ProfileHUD;
