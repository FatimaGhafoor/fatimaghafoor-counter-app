import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="app-container">
        <h1>Counter App</h1>
        <p>A simple React mini project.</p>
      </div>

      <div className="counter-container">
        <h2>Count: {count}</h2>

        <button className="increment" onClick={handleIncrement}>
          + Increment
        </button>

        <button className="decrement" onClick={handleDecrement}>
          - Decrement
        </button>

        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
