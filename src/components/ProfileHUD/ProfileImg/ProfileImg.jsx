import React from "react";
import s from "./ProfileImg.module.css";
//Вынести в стек будут рандомные изображения
let img = {
  lion: '',
  cat: '',
  rabbit: '',
};

const ProfileImg = (props) => {
  return (
    <div className={s.main}>
      <img
        className={s.userPic}
        src={img[`${props.img}`]}
        alt="userpic"

      />
    </div>
  );
};

export default ProfileImg;
