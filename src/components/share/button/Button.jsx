import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClickCustom}>{props.butName}</button>
    </div>
  );
};

export default Button;
