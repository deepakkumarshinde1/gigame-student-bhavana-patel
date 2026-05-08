import React, { useRef } from "react";

function Login() {
  //   let [username, setUsername] = React.useState("");
  let inputRef = useRef(null);
  let printInput = () => {
    // alert(inputRef.current.value);
    //console.log();
    // inputRef.current.style.backgroundColor = "red";
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={printInput}>Print Input</button>
    </div>
  );
}

export default Login;
