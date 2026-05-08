import React from "react";
import InputText from "./InputText";
import { useInputContext } from "../context/input.context";

function Input() {
  let { studentName, setStudentName } = useInputContext();
  return (
    <>
      <div>
        <h1>StudentName is </h1>
        <input
          type="text"
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
        />
      </div>
      <InputText />
    </>
  );
}

export default Input;
