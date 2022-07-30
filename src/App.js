import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import DeployedWebsite from "./components/DeployedWebsite";
import Editor from "./components/Editor";
import ErrorSection from "./components/ErrorSection";
import Loader from "./components/Loader";
import Login from "./components/Login";
import UserWebsites from "./components/UserWebsites";
import { UserContext } from "./context/userContext";
import { Store } from "./store/Store";

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Store>
      <Routes>
        <Route path="/" element={isLoggedIn ? <UserWebsites /> : <Login />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/creatingnewwebsite" element={<Loader />} />
        <Route path="/userwebsite/:id/deployed" element={<DeployedWebsite />} />
        <Route path="/*" element={<ErrorSection />} />
      </Routes>
    </Store>
  );
}

export default App;
