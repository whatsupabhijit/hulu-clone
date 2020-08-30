import React, { useState } from "react";
import "./App.css";
import "./Header.js";
import Header from "./Header.js";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      {/* just like you can pass value as a props, you can also pass modifier (in this case setSelectedOption) as a props */}
      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
