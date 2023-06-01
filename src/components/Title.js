import React from 'react';
import '../styles/title.css';

const Title = (props) => {
    return (
        <div class="seccion">
        <h1 class="titulo">
            <span class="texto-grande">{props.title}</span>
            <br />
            <span class="texto-pequeno">{props.subtitle} </span>
        </h1>
    </div>
    );
}

export default Title;