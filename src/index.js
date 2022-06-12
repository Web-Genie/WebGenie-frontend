import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { SubToolbarTypeProvider } from "./context/subToolbarContext";
<<<<<<< HEAD
=======
import { UserContextTypeProvider } from "./context/userContext";
>>>>>>> origin/main
import GlobalStyle from "./styles/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SubToolbarTypeProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
=======
      <UserContextTypeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </UserContextTypeProvider>
>>>>>>> origin/main
    </SubToolbarTypeProvider>
  </>
);
