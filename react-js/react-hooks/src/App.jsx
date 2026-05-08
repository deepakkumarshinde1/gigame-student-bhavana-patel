import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import { InputContextProvider } from "./context/input.context";
import Login from "./components/Login";

let initialState = {
  count: 0,
  count2: 100,
};

// action = {type: "ANY", ?payload: data} => ? == optional
let reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INC_COUNT":
      return { ...state, count: state.count + 1 };
    case "INC_COUNT_2":
      return { ...state, count2: state.count2 + 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // memorize a value => useMemo
  let value = useMemo(() => {
    return state.count % 5 == 0 ? "Yes" : "No";
  }, [state.count]);

  // memorize a function => useCallback
  let increment2 = useCallback(() => {
    dispatch({ type: "INC_COUNT_2" });
  }, [state.count2]);
  return (
    <>
      <section style={{ display: "none" }}>
        <button onClick={() => dispatch({ type: "INC_COUNT" })}>
          INC {state.count}
        </button>
        <h1>{state.count2}</h1>
        <Display value={value} increment2={increment2} />
        <Input />
      </section>
      <Login />
    </>
  );
}

export default App;

// useContext
// useReducer
// useMemo => completed
// useCallback => completed
// useRef
// useLayoutEffect
// useImperativeHandle
// useDebugValue

// HOC i.e Higher Order Component => functions that take a component and return a new component
// memo => completed
// custom hooks
// custom hoc
