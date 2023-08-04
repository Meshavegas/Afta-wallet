import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { NavBar } from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" exactly element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
