import React from "react";
import s from "./HabitTable.module.css";
import DateLine from "./DateLine/DateLine";
import ProfileHUD from "../ProfileHUD/ProfileHUD";
import Button from "../share/button/Button";
import TableLine from "./HabitLine/TableLine";


const HabitTable = (props) => {

  let AllLines = [];

  for (let i = 0; i < props.habits.length; i++) {

    AllLines.push(
      <TableLine
        dispatch={props.store.dispatch} //заменить или убрать
        days={props.habits[i].days}
        habit={props.habits[i].name}
        progress={props.habits[i].progress}
      />
    );
  }


  return (
    <div>
      <div className={s.habitLine}>
        <ProfileHUD hudData={props.hudData} />
        <DateLine days={props.days} />
        {AllLines}
        <Button
          onClickCustom={() => {
            props.addHabit()
          }}
          butName={"Add habit"}
          butClassName={"addHabit"}
        />
      </div>
    </div>
  );
};

export default HabitTable;
