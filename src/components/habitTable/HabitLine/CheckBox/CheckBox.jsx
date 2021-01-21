import React from "react";
import s from "./CheckBox.module.css";

const CheckBox = (props) => {
  return (
    <div>
      <input type="checkbox" className={s.main} />
    </div>
  );
};

export default CheckBox;
