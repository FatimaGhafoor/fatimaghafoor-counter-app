import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
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
          <span className="sub-label-text">Initial value is 0</span>

          <div className="main-actions">
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

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="quick-actions-grid">
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(1)}
              >
                +1
              </button>
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(5)}
              >
                +5
              </button>
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(10)}
              >
                +10
              </button>
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(-1)}
              >
                -1
              </button>
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(-5)}
              >
                -5
              </button>
              <button
                className="quick-btn"
                onClick={() => handleQuickActions(-10)}
              >
                -10
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
