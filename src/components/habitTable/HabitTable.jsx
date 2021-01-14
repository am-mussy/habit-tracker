import React from "react";
import s from "./HabitTable.module.css";
import TableLine from "./tableLine/TableLine";

function addLine() {
  console.log("Line added");
  AllLines.push(`<TableLine />`);
  console.log(AllLines);
}

let AllLines = [<TableLine />, <TableLine />];

const HabitTable = () => {
  return (
    <div>
      <button id="addLine" onClick={addLine}>
        add
      </button>
      <div className={s.main}>{AllLines}</div>
    </div>
  );
};

export default HabitTable;
