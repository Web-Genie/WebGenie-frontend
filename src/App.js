import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Editor from "./components/Editor";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import { UserContext } from "./context/userContext";

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <UserPage /> : <Login />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
