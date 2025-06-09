import React from "react";
import "./navBar.css";

export default function NavBar()
{
    return(
        <nav> 
            <h1 aria-label="Nome do projeto"> Quadro de Tarefas </h1> 
            <ul>
                <li id="nav-li-atribuicoes" aria-label="Atribuições">                          
                    <a href="#" id="nav-link-atribuicoes"> <i class="fa-regular fa-star"></i> Atribuições </a>
                </li>
                <li id="nav-copyright"> Copyright © 2025 Sâmily Goes</li>
            </ul>
        </nav>
    );
}