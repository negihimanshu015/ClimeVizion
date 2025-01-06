import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Front";
import Climate from "./Climate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/climate" element={<Climate />} />
      </Routes>
    </Router>
  );
};

export default App;
