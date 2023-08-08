import { useState } from "react";

import Screen from "./Screen";
import Controls from "./Controls";

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
      <Controls
        equation={equation}
        setEquation={setEquation}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default App;
