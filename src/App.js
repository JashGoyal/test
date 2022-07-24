import React from "react";
import "./App.css";
import Sign from "./components/Signuppage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./pages/Add.jsx";
import View from "./pages/View.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Sign />} />
        <Route path="/view" element={<View />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
