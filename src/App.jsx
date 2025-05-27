import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import TaskList from "./Components/TaskList/TaskList.jsx";

function App() {
  return (
    <>
      <NavBar />

      <div className="quadro">
        <TaskList titulo="A Fazer" />
        <TaskList titulo="Fazendo" />
        <TaskList titulo="Feito" />
      </div>   
    </>
  )
}

export default App
