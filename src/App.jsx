import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/common/Header";
import Home from "./pages/Home";
import Credit from "./pages/Credit";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
