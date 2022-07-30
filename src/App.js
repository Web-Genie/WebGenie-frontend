import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import DeployedWebsite from "./components/DeployedWebsite";
import Editor from "./components/Editor";
import ErrorSection from "./components/ErrorSection";
import Loader from "./components/Loader";
import Login from "./components/Login";
import UserWebsites from "./components/UserWebsites";
import { Context } from "./store/Store";

function App() {
  const { globalState } = useContext(Context);
  const { loggedInUserInformation } = globalState;

  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedInUserInformation.tokenInformation ? (
            <UserWebsites />
          ) : (
            <Login />
          )
        }
      />
      <Route path="/editor/:id" element={<Editor />} />
      <Route path="/creatingnewwebsite" element={<Loader />} />
      <Route path="/userwebsite/:id/deployed" element={<DeployedWebsite />} />
      <Route path="/*" element={<ErrorSection />} />
    </Routes>
  );
}

export default App;
