import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
