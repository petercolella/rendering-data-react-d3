import React from "react";
import ReactDOM from "react-dom";
import VegaComponent from "./VegaComponent";

const App = () => {
  return <VegaComponent />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
