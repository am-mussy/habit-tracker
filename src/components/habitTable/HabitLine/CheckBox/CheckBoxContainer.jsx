import React from "react";
import { connect } from "react-redux";
import { checkBoxChangerActionCreator } from "../../../../redux/habit-reducer";

import CheckBox from "./CheckBox"


// const CheckBoxContainer = (props) => {



//   let onCheckBoxChange = (id) => {

//     //props.dispatch(checkBoxChangerActionCreator(id));
//     props.update(id)
//   };

//   return <CheckBox
//     checked={props.isChecked}
//     id={props.id}
//     onCheckBoxChange={(id) => { onCheckBoxChange(id) }}
//   />
// };


let mapStateToProps = (state, props) => {


  return {
    checked: props.isChecked,
    id: props.id
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    onCheckBoxChange: (id) => { dispatch(checkBoxChangerActionCreator(id)) }
  }
}

const CheckBoxContainer = connect(mapStateToProps, mapDispatchToProps)(CheckBox)


export default CheckBoxContainer;
