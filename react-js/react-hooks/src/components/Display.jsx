import React, { memo } from "react";

function Display({ value, increment2 }) {
  return (
    <div>
      Display {value} <button onClick={increment2}>INC 2 </button>
    </div>
  );
}

export default memo(Display);

// memo => pure component
