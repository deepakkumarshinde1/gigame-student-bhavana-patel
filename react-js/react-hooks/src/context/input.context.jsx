import { createContext, useContext, useState } from "react";

let InputContext = createContext({});

// custom hook
export let useInputContext = () => {
  let context = useContext(InputContext);
  return context;
};

// wrapper component
export const InputContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("Deepak");
  let shared = {
    studentName,
    setStudentName,
  };
  return (
    <InputContext.Provider value={shared}>{children}</InputContext.Provider>
  );
};
