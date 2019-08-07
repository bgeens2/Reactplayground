import React from "react";
import ReactDOM from "react-dom";
import { Grommet, Box } from "grommet";

import "./styles.css";

import Mdxtest from "./mdxtest";

function App() {
  return (
    <Grommet>
      <div className="App">
        <h1>Hello CodeSandbox...</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Mdxtest />
      </div>
    </Grommet>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
