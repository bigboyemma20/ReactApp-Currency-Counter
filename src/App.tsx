import React from "react";
import "./App.css";
import CurrencyCounter from "./components/CurrencyCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghana Cedi Counter</h1>
        <CurrencyCounter />
      </header>
    </div>
  );
}

export default App;
