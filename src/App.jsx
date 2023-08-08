import { useState } from "react";

import Screen from "./Screen";

import "./App.css";

const App = () => {
  const [equation, setEquation] = useState([]);
  const [display, setDisplay] = useState("");

  return (
    <div id="calculator-container">
      <Screen
        equation={equation}
        display={display}
      />
    </div>
  );
};

export default App;
