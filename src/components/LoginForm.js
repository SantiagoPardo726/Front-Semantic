import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import "../styles/loginForm.css"


const LoginForm = () => {
    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        setUsername(e.target.value)
        console.log(username)
        context.updateUser(e.target.value);
    // const username = context.user.split("_")[0] +" " +context.user.split("_")[1];
    // console.log(context);
        // console.log(username)

    };
    const urlIamge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX5+fn////8/PwAAABycnLW1tbm5ubt7e09PT2Li4u+vr6Dg4OAgIDw8PDGxsb39/fe3t5ISEhYWFhubm65ubmWlpapqalnZ2dSUlJfX1/MzMy1tbUfHx+dnZ0mJiZqamoxMTERERFFRUWRkZE4ODgaGhouLi4LCwukpKRk7ixPAAAExklEQVR4nO3ai3KqOhQG4KwVLgoEkHKnWCu2+v5PeAIBtd2nZ0/ntCMw/zfjiBI7+UtIAkQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4FUxXfPvEj67Wz2Fne9UQ28NG1sRiNSE53k1eLWJPHvXWcfP83rr06Lr9GDbI6hNuXL0pVN3JfbOeiMaUcPjAJDIZRGtpqcaHhP3nWlrrSci6X/mcsI/YraWh6g7V/TOhoFTWK4nItnT4z4SCq2ol7fTLhPY5XEfErxIKPm7X0UzHhAFRuFFm2mZ2ULZZVcJdkwfvbd5LzQ7d1zy2Zv/bOPkcE8r3/dt5PyjG/bVUSz4RWclwaITX81C30uhDK114QiFk+jHh556GvIW3Ujplf0nYHpbd05B/HNrg1wl3wcIThue4j/jliB9Lb9kJhUiKPsFXCemlfFTFfgqFQ296l/Dg/rF32ciXNt0ltFt122fLhZ+FRqIjXhP21/YTHbCMHlixn8JuInOKp4RXRLlM3GWP9iOmVu630qGhlY63S0WcP8t2NTcUKfZf5aay3g/Wk1Ed31+DeC35RH8Ybbn1g9MpsIwgq9VqDuBA9zTuh1a6rnjibjx8dEV+DRIuHxIu37oTDgNEfDdaPLpCP428pCiKRFZFsd+/FEX1sraIVAc9v3/5w9baEt6vVLi/jwgA8F2u+nuZW2Hn1+rxa8j/xqNc6qpfrMovuSUkNV68U6RfwuXhlrdQzKyEKUNdwiJS5Dr9Tv0m+o96h9I/cVk5+o84c1tpc0voJ0mgBOVpU7l6OvNS6Ppecqu03CCpbJN9m+jvyvZ4sPQ/IN0cNzXVOx33uaH41CZ7q94c5nYbbkrIVs6Ul6RfnWI7UVTrNF2pqDvZFO6G0X5ImEnLqeUTue9e1MRUP+uE/V3Hc2K3ch97sp3XzGBMyHap60VJTHlF+svGdZwypq4hjgsS0el2DLO3iOkiVZSUjUt8TShtis4X4mpmKximhGE/rSarpjbXCa0g6zJfJ0xNQrW5S3jQBbyzw07w9qxb6V5fXZmEHJ1z4mJ2CevhBpp7EkRqE5mE7aWfhfK/J5QeUXVgEeurqorq15Tsa8LLDBMGfqMpSquwLluiTCcUatfGeaAT9Ql1s1VTKy11wufyJZE61qHo3nJSu9eknBLKvpXO7BKE67anO1F76w/Pmvpuk6NLcIkEhTELN9VDQjMWbnTCk8q6WJd02q3H+i1r3dwm9+JwlOsfN/W8+tLxEslsDGfkOPSZ78yYKMbxsH/+RN3bWFKMP9Al+42+/PA+s4DfRnbz6Cr8jK8PBM/rNPuusY2K6LoG+NboaNp5F5J5YW2SwtQ8242O46IvN7+ulG1Ce3zwG+bjzEzZqb2oiFwXnrk+inZmLueWnmVWlbDfXldjpGk1ZOX46J2W9TBRPQXmcnFMSOGWVGUOoh4KE5PQ9Zty2OL4iYJFHUS2w20+5Ik2t2M4LnBLX7KdyeUFzril5zvW3Ia//+bmzXSqmTeO83HpE8dhXY07Uy80W66el7qf/8i8Xe+JTu88fcN2t3Wmi+W7Yosf4G94fQ+4AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADm6B/p6TqbKnIWjQAAAABJRU5ErkJggg=="
    return (
        <div id="midiv">
            <div class="columna1">
                <img src={urlIamge} alt="Imagen" />
                <h1>Regístrate</h1>
            </div>
            <div class="columna2">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) =>handleSubmit(e)}
                    />
                    <a href="/" >
                    Iniciar sesión
                    </a>
                
            </div>

        </div>
    );
};

export default LoginForm;