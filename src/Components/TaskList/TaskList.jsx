import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskList.css";


export default function TaskList({titulo})
{
    const [count, setCount] = useState(0);

    function aumentar()
    {
        setCount((currentCount) => {
            return currentCount + 1;
        });
    }

    return(
        <div className="task-list"> 
            <span>{titulo}</span>
            <div className="content">
                {count}
                <button onClick={aumentar}>aumenta</button>
            </div>
        </div>
    );
}

TaskList.proptypes = {
    titulo: PropTypes.string.isRequired,
}