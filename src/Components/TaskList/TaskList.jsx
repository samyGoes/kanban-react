import React from "react";
import PropTypes from "prop-types";
import "./taskList.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({titulo, onAddTask, tasks, taskStatus, borderRight})
{
    function addTask()
    {
        console.log("ADD task no TaskList");
        onAddTask("Título da tarefa...", "A fazer");
    }

    return(
        <div className="task-list" style={{borderRight: borderRight}}> 
            <div className="task-nav">
                <h2>
                    <div className="task-status" style={{backgroundColor: taskStatus}}></div> 
                    {titulo}
                </h2>
                <button class="btn-nova-tarefa" onClick={addTask} aria-label="Adicionar nova tarefa"> <i class="fa-solid fa-plus"></i> </button>
            </div>
            
            <div className="content">
                {tasks?.map((task) => {
                    return <TaskItem key={task.id} id={task.id} titulo={task.titulo} status={task.status} />
                })}
            </div>
        </div>
    );
}


TaskList.proptypes = {
    titulo: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}