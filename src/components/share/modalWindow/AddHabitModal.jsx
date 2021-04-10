import React from "react";
import s from "./AddHabitModal.module.css"

const AddHabitModal = (props) => {

  let addHabitBtn = React.createRef();



  return (
    <div className={s.main} >
      <div className={s.modalWindow}>

        <button className={s.CloseBtn} onClick={() => {
          props.closeWindow()
        }
        }></button>

        <label for={'habitName'}></label>

        <input id={'habitName'} ref={addHabitBtn}></input>

        <button
          className={s.addHabitBtn}
          onClick={() => {
            props.addHabit(addHabitBtn.current.value)
            props.closeWindow()
          }}

        >ADD HABIT</button>
      </div>
    </div>
  );
};

export default AddHabitModal;
