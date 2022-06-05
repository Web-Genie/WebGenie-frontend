import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
