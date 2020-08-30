import React from "react";
import "./App.css";
import "./Header.js";
import Header from "./Header.js";
import Nav from "./Nav";
import Results from "./Results";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Navigations */}
      <Nav />

      {/* Results */}
      <Results />
    </div>
  );
}

export default App;
