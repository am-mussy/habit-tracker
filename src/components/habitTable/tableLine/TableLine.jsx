import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import s from "./TableLine.module.css";

//             1|2|3|4|5|6|7|8|9|10
//  HabitName |X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|
//
//

let x = {
  checkBoxs: {
    0: {
      isChect: true,
    },
    1: {
      isChect: true,
    },
    2: {
      isChect: true,
    },
  },
};



console.log(x.checkBoxs[0]);

const TableLine = (props) => {
  return (
    <div className={s.main}>
      <p>Do anal</p>
      <CheckBox />
    </div>
  );
};

export default TableLine;
