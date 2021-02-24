import React from "react";
import s from "./CheckBox.module.css";

const CheckBox = (props) => {
  let onCheckBoxChange = (id) => {
    console.log(id);
    props.changeCheckBox(id);
  };

  let checkBoxRef = React.createRef();

  return (
    <div>
      <input
        onChange={() => {
          onCheckBoxChange(checkBoxRef.current.id);
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
