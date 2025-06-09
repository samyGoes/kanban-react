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
            <div className="task" onClick={(e) => setEditando(true)}>
                <div className="retangulo"></div>

                <div className="conteudo-task">
                    <input 
                        className="task-input" 
                        type="text" 
                        value={tituloEditavel} 
                        placeholder="Digite o nome da tarefa..." 
                        onChange={onChangeTitulo} 
                        onKeyDown={onKeyDownEnter} />
                        
                    <div className="data">
                        <p>09-12-25</p>
                    </div>
                </div>         
            </div>
        );
    }
    else
    {
        return ( 
            <div className="task" onClick={(e) => setEditando(true)}>
                <div className="retangulo"></div>

                <div className="conteudo-task">
                    <h3 contenteditable="true"> {tituloEditavel} </h3>
                    <div className="data">
                        <p>09-12-25</p>
                    </div>
                </div>         
            </div>
        );
    }
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}