import React from "react";
import s from "./HabitTable.module.css";
import DateLine from "./DateLine/DateLine";
import Button from "../share/button/Button";
import TableLine from "./HabitLine/TableLine";

import TableLineContainer from "./HabitLine/TableLineContainer";


const HabitTable = (props) => {

  let AllLines = [];

  for (let i = 0; i < props.habits.length; i++) {

    AllLines.push(
      <TableLineContainer
        habit={props.habits[i].name}
        key={props.habits[i].name + "id"}
      />
    );
  }

  return (
    <div className={s.habitTableMain}>

      <div className={s.habitLine}>

        {/* <ProfileHUD hudData={props.hudData} /> */}
        <DateLine days={props.days} />
        {AllLines}
        <Button

          onClickCustom={() => {
            // props.addHabit()
            props.showaAddHabitModalWindow()
          }}
          butName={"Add habit"}
          butClassName={"addHabit"}
        />
      </div>
      {props.addHabitModalContainer}

    </div>
  );
};

export default HabitTable;
