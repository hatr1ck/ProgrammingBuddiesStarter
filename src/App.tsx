import React from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import "./App.scss";
import discord from "./discord.svg";

function App() {
  const result: any = useSelector((state: any) => state.reducer1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Reddit ProgrammingBudies() group MERN starter</p>
        <p>
          We have here:{" "}
          {result.map((el: string) => (
            <span key={el}> {el},</span>
          ))}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: "#61DAFB" }}
          href="https://discord.gg/DbY7Fb846y"
        >
          {" "}
          Discord
          <img src={discord} alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
