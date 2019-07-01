// 1. Import React OM
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import SimpleComponent from "./components/simpleComponent.jsx";
ReactDom.render(<SimpleComponent />, document.getElementById("app"));
