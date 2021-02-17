import React from "react";
import s from "./CheckBox.module.css";

const CheckBox = (props) => {
  
  return (
    <div>
      <input checked={props.isChecked} type="checkbox" className={s.main} />
    </div>
  );
};

export default CheckBox;
