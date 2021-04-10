import React from "react";
import HabitTable from "./HabitTable";

import { addHabitActionCreator } from "../../redux/habit-reducer";
import { checkBoxChangerActionCreator } from "../../redux/habit-reducer";
//import { userDataActionCreator } from "../../redux/userData-reducer";
import { connect } from "react-redux";
import { showaAddHabitModalWindowActionCreator } from "../../redux/window-reduce";
import AddHabitModalContainer from "../share/modalWindow/AddHabitModalContainer";



let mapStateToProps = (state) => {

  if (state.addHabitModal.isOpen) {

    return {
      addHabitModalContainer: <AddHabitModalContainer />,
      habits: state.habits,
      hudData: state.userData,
      days: state.monthData.days
    }
  }

  return {
    habits: state.habits,
    hudData: state.userData,
    days: state.monthData.days
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    update: (id) => { dispatch(checkBoxChangerActionCreator(id)) },
    addHabit: () => { dispatch(addHabitActionCreator('run')) },
    showaAddHabitModalWindow: () => { dispatch(showaAddHabitModalWindowActionCreator()) }
  }
}

const HabitTableContainer = connect(mapStateToProps, mapDispatchToProps)(HabitTable)

export default HabitTableContainer;
