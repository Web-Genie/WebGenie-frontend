import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Editor from "./components/Editor";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("idToken"));

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            userToken ? <UserPage /> : <Login handleUser={setUserToken} />
          }
        />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
