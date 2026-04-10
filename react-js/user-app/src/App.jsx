import { useEffect, useState } from "react";
import Child from "./components/Child";

function App() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(100);
  let [toggle, setToggle] = useState(true);

  let updateToggle = () => {
    setToggle(!toggle);
  };
  let increment = () => {
    setCount(count + 1);
  };

  let increment2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  useEffect(() => {
    console.log("App component updated", count);
  }, [count]);

  return (
    <div>
      <h1>Counter :: {count}</h1>
      <button onClick={increment}>INC</button>
      <hr />
      <h1>Counter 2:: {count2}</h1>
      <button onClick={increment2}>INC</button>
      <hr />
      <button onClick={updateToggle}>Toggle</button>
      {toggle === true ? <Child /> : null}
    </div>
  );
}

export default App;

// initialization => memory allocation (once per lifecycle)
// rendering => create UI In Dom (multiple times)
// mounting  => add to Dom (once per lifecycle)
// updating => when the change happens components in the state or props (multiple times)
// unmounting => when the component is removed from the Dom (once per lifecycle)

// functional component lifecycle  => useEffect()
// mounting => useEffect(()=>{},[]) :: [] => dependency array
// updating => useEffect(()=>{},[state,props]) :: [state,props] => dependency array
