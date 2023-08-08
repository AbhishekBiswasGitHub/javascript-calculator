import { useState } from "react";

import "./App.css";

const App = () => {
  const [equation, setEquation] = useState([]);
  const [display, setDisplay] = useState("");

  return <div id="calculator-container"></div>;
};

export default App;
