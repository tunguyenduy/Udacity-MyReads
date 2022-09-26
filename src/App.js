import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
function BooksApp() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default BooksApp;
