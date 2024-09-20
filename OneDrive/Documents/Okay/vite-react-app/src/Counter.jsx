import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="count">
        <p className="countplay">{count}</p>
        <button className="countbutton" onClick={increment}>Increment</button>
        <button className="countbutton" onClick={reset}>Reset</button>
        <button className="countbutton" onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
