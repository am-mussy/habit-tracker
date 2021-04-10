import React from "react";
import CheckBoxContainer from "./CheckBox/CheckBoxContainer";
import s from "./TableLine.module.css";

//               1|2|3|4|5|6|7|8|9|10
//  > HabitName |X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|
//
//
// Формируем компоненту привычки из Названия и чек-боксов

const TableLine = (props) => {
  // let habitLine = [];

  // for (let i = 0; i < props.days; i++) {
  //   if (props.progress[i]) {
  //     habitLine.push(
  //       <CheckBoxContainer
  //         isChecked={true}
  //         id={`${props.habit} ${i}`}
  //         update={props.update}
  //         key={`${props.habit} ${i}` + "ID"}
  //       />
  //     );
  //   } else {
  //     habitLine.push(
  //       <CheckBoxContainer
  //         id={`${props.habit} ${i}`}
  //         update={props.update}
  //         key={`${props.habit} ${i}` + "ID"}
  //       />
  //     );
  //   }
  // }

  return (
    <div className={s.main}>
      <p>{props.habit}</p>
      {props.habitLine}
    </div>
  );
};

export default TableLine;
