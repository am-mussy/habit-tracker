import React from "react";
import s from "./HabitTable.module.css";
import TableLine from "./HabitLine/TableLine";
import DateLine from "./DateLine/DateLine";
import ProfileHUD from "../ProfileHUD/ProfileHUD";
import Button from "../share/button/Button";

const HabitTable = (props) => {
  let AllLines = [
    <TableLine
      days={props.state.habits[0].days}
      habit={props.state.habits[0].name}
      progress={props.state.habits[0].progress}
    />,
    <TableLine
      days={props.state.habits[1].days}
      habit={props.state.habits[1].name}
      progress={props.state.habits[1].progress}
    />,
  ];

  let butAddHabit = React.createRef();

  let fuckOff = () => {
    window.alert(butAddHabit.current.value);
  };

  return (
    <div>
      <div className={s.habitLine}>
        <ProfileHUD hudData={props.state.userData} />
        <DateLine days={props.state.monthData.days} />
        {AllLines}
        <Button
          onClickCustom={fuckOff}
          butName={"Add habit"}
          butClassName={"addHabit"}
        />
      </div>
    </div>
  );
};

export default HabitTable;
