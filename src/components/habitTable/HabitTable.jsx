import React from "react";
import s from "./HabitTable.module.css";
import TableLine from "./HabitLine/TableLine";
import DateLine from "./DateLine/DateLine";
import ProfileHUD from "../ProfileHUD/ProfileHUD";
import Button from "../share/button/Button";

const HabitTable = (props) => {
  let AllLines = [];

  for (let i = 0; i < props.state.habits.length; i++) {
    AllLines.push(
      <TableLine
        changeCheckBox={props.changeCheckBox}
        days={props.state.habits[i].days}
        habit={props.state.habits[i].name}
        progress={props.state.habits[i].progress}
      />
    );
  }

  console.log(props);
  return (
    <div>
      <div className={s.habitLine}>
        <ProfileHUD hudData={props.state.userData} />
        <DateLine days={props.state.monthData.days} />
        {AllLines}
        <Button
          onClickCustom={() => {
            console.log("klick");
            props.addHabit("dev");
          }}
          butName={"Add habit"}
          butClassName={"addHabit"}
        />
      </div>
    </div>
  );
};

export default HabitTable;
