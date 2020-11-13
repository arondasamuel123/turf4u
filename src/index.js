import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './css/tailwind.css';
import  { makeServer }  from "./server"


makeServer();

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
