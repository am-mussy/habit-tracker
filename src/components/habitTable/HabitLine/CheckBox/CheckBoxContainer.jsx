import React from "react";
import { checkBoxChangerActionCreator } from "../../../../redux/habit-reducer";

import CheckBox from "./CheckBox"


const CheckBoxContainer = (props) => {



  let onCheckBoxChange = (id) => {

    props.dispatch(checkBoxChangerActionCreator(id));
  };

  return <CheckBox
    checked={props.isChecked}
    id={props.id}
    onCheckBoxChange={(id) => { onCheckBoxChange(id) }}
  />
};

export default CheckBoxContainer;
