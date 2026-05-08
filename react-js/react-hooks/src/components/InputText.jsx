import React from "react";
import { useInputContext } from "../context/input.context";

function InputText() {
  let { studentName } = useInputContext();
  return <div>InputText {studentName}</div>;
}

export default InputText;
