<<<<<<< HEAD
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Editor from "./components/Editor";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("idToken"));
=======
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Editor from "./components/Editor";
import Loader from "./components/Loader";
import Login from "./components/Login";
import UserWebsites from "./components/UserWebsites";
import { UserContext } from "./context/userContext";

function App() {
  const { isLoggedIn } = useContext(UserContext);
>>>>>>> origin/main

  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route
          path="/"
          element={
            userToken ? <UserPage /> : <Login handleUser={setUserToken} />
          }
        />
        <Route path="/editor/:id" element={<Editor />} />
=======
        <Route path="/" element={isLoggedIn ? <UserWebsites /> : <Login />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/creatingnewwebsite" element={<Loader />} />
>>>>>>> origin/main
      </Routes>
    </>
  );
}

export default App;
