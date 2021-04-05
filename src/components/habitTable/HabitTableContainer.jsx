import React from "react";
import s from "./HabitTable.module.css";
import TableLine from "./HabitLine/TableLine";
import HabitTable from "./HabitTable";
import DateLine from "./DateLine/DateLine";
import ProfileHUD from "../ProfileHUD/ProfileHUD";
import Button from "../share/button/Button";
import { addHabitActionCreator } from "../../redux/habit-reducer";
import { userDataActionCreator } from "../../redux/userData-reducer";
import { connect } from "react-redux";



const HabitTableContainer = (props) => {

  return (
    <HabitTable
      addHabit={() => { props.store.dispatch(addHabitActionCreator('do_anal')) }}
      hudData={state.userData}
      days={state.monthData.days}
    />
  );
};



// let mapStateToProps = (state) => {


//   let AllLines = [];

//   for (let i = 0; i < state.habits.length; i++) {

//     AllLines.push(
//       <TableLine
//         dispatch={state.store.dispatch}
//         days={state.habits[i].days}
//         habit={state.habits[i].name}
//         progress={state.habits[i].progress}
//       />
//     );
//   }

//   return {
//     AllLines,
//     hudData: state.userData,
//     days: state.monthData.days

//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addHabit: () => {
//       dispatch(addHabitActionCreator('do_anal'))
//     }
//   }
// }

// const HabitTableContainer = connect(mapStateToProps, mapDispatchToProps)(HabitTable)

export default HabitTableContainer;
