import React from "react";
import ReactDOM from "react-dom";
import FetchContainer from "./FetchContainer";

const App = () => {
  return <FetchContainer />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
