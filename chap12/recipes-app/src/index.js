import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Menu from "./Menu";
import data from './data.json'

ReactDOM.hydrate(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("root")
);
