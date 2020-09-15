import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./components/context-api/StateProvider";
import reducer, { initalState } from "./components/context-api/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* StateProvider, allows every component to access the data layer */}
    <StateProvider initialState={initalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
