import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Store } from "./store/Store";
import GlobalStyle from "./styles/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Store>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Store>
);
