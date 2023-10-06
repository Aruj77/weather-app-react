import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Aruj77/weather-app-react">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/Aruj77">
          Aruj Bansal
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
