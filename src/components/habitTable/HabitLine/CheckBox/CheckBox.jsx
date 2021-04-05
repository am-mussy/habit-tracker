import React from "react";
import { checkBoxChangerActionCreator } from "../../../../redux/habit-reducer";
import s from "./CheckBox.module.css";

const CheckBox = (props) => {

  let checkBoxRef = React.createRef();

  return (
    <div>
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
    </div>
  );
};

export default CheckBox;
