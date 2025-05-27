import React, {useState} from "react";
import PropTypes from "prop-types";
import "./taskItem.css";

export default function TaskItem({id, titulo, status})
{
    const [editando, setEditando] = useState(false);
    const [tituloEditavel, setTituloEditavel] = useState(titulo);

    function onChangeTitulo(event)
    {
        const novoTitulo = event.target.value;
        setTituloEditavel(novoTitulo);
    }

    function onKeyDownEnter(event)
    {
        if(event.key == "Enter")
        {
            setEditando(false);
        }
    }

    if(editando)
    {
        return (
            <input 
            className="task-input" 
            type="text" 
            value={tituloEditavel} 
            placeholder="Digite o nome da tarefa..." 
            onChange={onChangeTitulo} 
            onKeyDown={onKeyDownEnter} />
        );
    }
    else
    {
        return <div className="task" onClick={(e) => setEditando(true)}>{tituloEditavel}</div>
    }
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}