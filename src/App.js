import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Editor from "./components/Editor/Editor";
import Login from "./components/Login/Login";
import UserPage from "./components/UserPage/UserPage";

function App() {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("accessToken")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={userToken ? <UserPage /> : <Login />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
