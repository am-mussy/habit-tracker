import React from "react";
import { connect } from "react-redux";
import { addHabitActionCreator } from "../../../redux/habit-reducer";
import { closeAddHabitModalWindowActionCreator } from "../../../redux/window-reduce";
import AddHabitModal from './AddHabitModal'

let mapStateToProps = (state) => {
  return {

  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addHabit: (habitName) => { dispatch(addHabitActionCreator(habitName)) },
    closeWindow: () => { dispatch(closeAddHabitModalWindowActionCreator()) }
  }
}


const AddHabitModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddHabitModal)


export default AddHabitModalContainer;
