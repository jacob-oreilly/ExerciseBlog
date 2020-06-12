import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PreviewCard from "./components/PreviewCard/PreviewCard";

const list = ["post 1", "post 2", "post 3", "post 4"];

function App() {
  return (
    <div className="App">
      <div className="card-container">
        {list.map((name, index) => (
          <PreviewCard>{name}</PreviewCard>
        ))}
      </div>
    </div>
  );
}

export default App;
