import React from "react";
import DateСell from "./DateСell/DateСell";
import s from "./DateLine.module.css";

// >           1|2|3|4|5|6|7|8|9|10
//  HabitName |X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|
//
//
// Формируем компоненту дат - шапка таблицы

const DateLine = (props) => {
  let dateLine = [];
  for (let i = 0; i < props.days; i++) {
    dateLine.push(<DateСell date={i + 1} />);
  }

  return (
    <div className={s.main}>
      <p>Dates</p>
      {dateLine}
    </div>
  );
};

export default DateLine;
