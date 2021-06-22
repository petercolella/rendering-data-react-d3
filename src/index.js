import React from "react";
import ReactDOM from "react-dom";
import PieContainer from "./PieContainer";

const App = () => {
  return <PieContainer />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
