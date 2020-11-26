import React from "react";
import NavBarFirst from "./components/navigation/navbarFirst";
import NavBarSecond from "./components/navigation/navbarSecond";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <NavBarFirst />
      <NavBarSecond />
      <Routes />
    </div>
  );
}

export default App;
