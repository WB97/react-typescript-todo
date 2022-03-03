import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
