import React from "react";
import { checkBoxChangerActionCreator } from "../../../../redux/habit-reducer";
import s from "./CheckBox.module.css";

const CheckBox = (props) => {

  let checkBoxRef = React.createRef();

  return (
    <div className={s.cell}>
      <input
        onChange={() => {
          props.onCheckBoxChange(checkBoxRef.current.id)
        }}
        checked={props.isChecked}
        type="checkbox"
        className={s.main}
        id={props.id}
        ref={checkBoxRef}
      />
      <label for={props.id} className={s.label}></label>
    </div>
  );
};

export default CheckBox;
