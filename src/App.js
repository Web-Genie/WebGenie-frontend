import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
