import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={s.main}>
      <button id={'addHabitBtn'} onClick={props.onClickCustom}></button>


    </div>
  );
};

export default Button;
