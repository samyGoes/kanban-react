import React from "react";
import PropTypes from "prop-types";
import "./taskList.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({titulo, onAddTask, tasks})
{
    function addTask()
    {
        console.log("ADD task no TaskList");
        onAddTask("Nova tarefa", "A fazer");
    }

    return(
        <div className="task-list"> 
            <span>{titulo}</span>

            <div className="content">
                {tasks?.map((task) => {
                    return <TaskItem key={task.id} id={task.id} titulo={task.titulo} status={task.status} />
                })}
            </div>

            <button id="btn-nova-tarefa" onClick={addTask}> nova tarefa </button>
        </div>
    );
}

TaskList.proptypes = {
    titulo: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}