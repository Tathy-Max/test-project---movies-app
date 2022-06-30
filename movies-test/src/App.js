import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { MoviesList } from "./pages/MoviesList";
import { ListDetail } from "./pages/ListDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviesList" element={<MoviesList />} />
        <Route path="/list/:id" element={<ListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
