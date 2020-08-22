import React, { Profiler } from "react";
// import { Switch } from 'react-dom'
import "./styles.css";
import ListofTenThings from "./jsx_probe";
import Greeting from "./without_es6";

export default function App() {
  function callback() {
    console.log(arguments);
  }
  return (
    <div>
      <Profiler id="list" onRender={callback}>
        <div className="App">
          <ListofTenThings />
        </div>
      </Profiler>
      <Greeting name="czd123" />
    </div>
  );
}
