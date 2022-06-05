import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import UserPage from "./components/UserPage/UserPage";
import WebsiteEditor from "./components/WebsiteEditor/WebsiteEditor";

function App() {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("accessToken")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={userToken ? <UserPage /> : <Login />} />
        <Route path="/usereditor/:id" element={<WebsiteEditor />} />
      </Routes>
    </>
  );
}

export default App;
