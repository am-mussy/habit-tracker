import React from "react";
import s from "./DataCell.module.css"

const DateСell = (props) => {
  return (
    <div>
      <p className={s.cell}>{props.date}</p>
    </div>
  );
};

export default DateСell;
