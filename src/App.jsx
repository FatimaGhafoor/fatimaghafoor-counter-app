import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCounterActions = (value) => {
    setCount((prev) => Math.max(0, prev + value));
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleQuickActions = (value) => {
    setCount((prev) => Math.max(0, prev + value));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const QUICK_ACTIONS = [1, 5, 10, -1, -5, -10];
  return (
    <div className={`main-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
      <button className="theme-toggle-btn" onClick={toggleDarkMode}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="main-container">
        <div className="app-container">
          <h1>Counter App</h1>
          <p>A simple React mini project.</p>
        </div>

        <div className="counter-container">
          <span className="label-text">Current Count</span>
          <h2>{count}</h2>
          <span className="sub-label-text">Counter starts from 0</span>

          <div className="main-actions">
            <button
              className="increment"
              onClick={() => handleCounterActions(1)}
            >
              + Increment
            </button>

            <button
              className="decrement"
              onClick={() => handleCounterActions(-1)}
            >
              - Decrement
            </button>

            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            {QUICK_ACTIONS.map((val) => (
              <button
                key={val}
                className="quick-btn"
                onClick={() => handleQuickActions(val)}
              >
                {val > 0 ? `+${val}` : val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
