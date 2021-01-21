import React from "react";
import s from "./HabitTable.module.css";
import TableLine from "./HabitLine/TableLine";
import DateLine from "./DateLine/DateLine";

let AllLines = [
  <TableLine habit={"do anal"} />,
  <TableLine habit={"Оджумания"} />,
];

const HabitTable = () => {
  return (
    <div>
      <div></div>
      <div className={s.habitLine}>
        <DateLine />
        {AllLines}
      </div>
    </div>
  );
};

export default HabitTable;
