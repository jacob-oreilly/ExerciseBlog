import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PreviewCard from "./components/PreviewCard/PreviewCard";
import Header from "./components/Header/header";

const list = ["post 1", "post 2", "post 3", "post 4"];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="card-container">
        {list.map((name, index) => (
          <PreviewCard className="card"></PreviewCard>
        ))}
      </div>
    </div>
  );
}

export default App;
