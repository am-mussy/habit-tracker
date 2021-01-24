import React from "react";
import s from "./ProfileImg.module.css";
//Вынести в стек будут рандомные изображения
let img = {
  lion: "http://aydogan.ru/img/lion.png",
  cat: "http://aydogan.ru/img/cat.png",
  rabbit: "http://aydogan.ru/img/rabbit.png",
};

const ProfileImg = (props) => {
  return (
    <div className={s.main}>
      <img
        className={s.userPic}
        src={img[`${props.img}`]}
        alt="userpic"
        srcset=""
      />
    </div>
  );
};

export default ProfileImg;
