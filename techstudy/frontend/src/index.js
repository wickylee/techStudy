// import "./css/apptheme";
// import "./scss/apptheme";
import "./css/try_dnd";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import AppTheming from "./apptheming";
import App from "./App";

ReactDOM.render(
  // <Suspense fallback="loading...">
    <App />
  // </Suspense>
  ,
  document.getElementById("app")
);
