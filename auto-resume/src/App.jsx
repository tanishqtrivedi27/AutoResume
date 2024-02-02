import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const CLIENT_ID = "a12b9b0d5b4c0a8f85b3";
function App() {
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/auth/authorize?cliend_id" + CLIENT_ID
    );
  }

  return (
    <>
      <button onClick={loginWithGithub}>login with github</button>
    </>
  );
}

export default App;