import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [steps, setSteps] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${""}`}
          // className={"App-logo" + (props.rotating ? "" : "App-logo-paused")}
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <label for="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value={steps}
          onChange={(e) => {
            setSteps(e.target.value);
          }}
          min="1"
          max="10"
          step="1"
        />
      </header>
    </div>
  );
}
