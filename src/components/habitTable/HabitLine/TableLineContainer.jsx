import React from "react";
import { connect } from "react-redux";
import { checkBoxChangerActionCreator } from "../../../redux/habit-reducer";
import CheckBoxContainer from "./CheckBox/CheckBoxContainer";
import TableLine from "./TableLine";
import s from "./TableLine.module.css";


let mapStateToProps = (state, props) => {

  let habitLine = [];

  let stateHabits = state.habits
  let selectHabit

  for (let k = 0; k < stateHabits.length; k++) {
    if (stateHabits[k].name === props.habit) {
      selectHabit = stateHabits[k]
    }
  }

  for (let i = 0; i < state.monthData.days; i++) {

    if (selectHabit.progress[i]) {

      habitLine.push(
        <CheckBoxContainer
          isChecked={true}
          id={`${selectHabit.name} ${i}`}
          key={`${selectHabit.name} ${i}` + "ID"}
        />
      );
    } else {
      habitLine.push(
        <CheckBoxContainer
          id={`${selectHabit.name} ${i}`}
          key={`${selectHabit.name} ${i}` + "ID"}
        />
      );
    }
  }


  return {
    habitLine: habitLine,
    habit: props.habit
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    update: (id) => { dispatch(checkBoxChangerActionCreator(id)) }
  }
}


const TableLineContainer = connect(mapStateToProps, mapDispatchToProps)(TableLine)

export default TableLineContainer;

