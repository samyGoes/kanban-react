import React, { useState } from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import TaskList from "./Components/TaskList/TaskList.jsx";

const task = {
  id: 0,
  titulo: "Nova tarefa",
  status: "pendente"
}

let id = 0;
function gerarID() { return id++; }

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(titulo, status)
  {
    console.log("ADD task no App");
    const novaTask = {
      id: gerarID(),
      titulo,
      status
    }
    setTasks((tasksExistentes) => {
      return [...tasksExistentes, novaTask];
    });
  }

  return (
    <>
      <NavBar />

      <div className="quadro">
        <TaskList titulo="A Fazer" />
        <TaskList titulo="Fazendo" onAddTask={addTask} tasks={tasks} />
        <TaskList titulo="Feito" />
      </div>   
    </>
  )
}

