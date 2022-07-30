import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { SubToolbarTypeProvider } from "./context/subToolbarContext";
import { UserContextTypeProvider } from "./context/userContext";
import GlobalStyle from "./styles/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SubToolbarTypeProvider>
    <UserContextTypeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </UserContextTypeProvider>
  </SubToolbarTypeProvider>
);
