import React from "react";
import { render } from "react-dom";
import Clock from "./Clock";
import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

render(<App />, document.getElementById("root"));
