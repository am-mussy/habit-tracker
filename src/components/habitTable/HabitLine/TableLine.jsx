import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import s from "./TableLine.module.css";

//               1|2|3|4|5|6|7|8|9|10
//  > HabitName |X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|
//
//
// Формируем компоненту привычки из Названия и чек-боксов

const TableLine = (props) => {
  let habitLine = [];

  for (let i = 0; i < props.days; i++) {
    if (props.progress[i]) {
      habitLine.push(
        <CheckBox
          isChecked={true}
          id={`${props.habit} ${i}`}
          changeCheckBox={props.changeCheckBox}
        />
      );
    } else {
      habitLine.push(
        <CheckBox
          id={`${props.habit} ${i}`}
          changeCheckBox={props.changeCheckBox}
        />
      );
    }
  }

  return (
    <div className={s.main}>
      <p>{props.habit}</p>
      {habitLine}
    </div>
  );
};

export default TableLine;
