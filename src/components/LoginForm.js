import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import "../styles/loginForm.css";

const LoginForm = () => {
  const context = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    setUsername(e.target.value);
    console.log(username);
    context.updateUser(e.target.value);
    // const username = context.user.split("_")[0] +" " +context.user.split("_")[1];
    // console.log(context);
    // console.log(username)
  };
  const urlIamge ="https://firebasestorage.googleapis.com/v0/b/moviles2023-c0911.appspot.com/o/images%2FlogoSW.png?alt=media&token=28386e87-abd8-4fca-bccb-f41a2e732dc6&_gl=1*4f0mc3*_ga*NTI4Mjc5OTcyLjE2Nzk3MDEzMjM.*_ga_CW55HF8NVT*MTY4NTY5MDE3OC4xNS4xLjE2ODU2OTAyNDcuMC4wLjA.";
  return (
    <div id="midiv">
      <div class="columna_1">
        <img src={urlIamge} alt="Imagen" />
        <h1>Regístrate</h1>
      </div>
      <div class="columna2">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => handleSubmit(e)}
        />
        <a href="/">Iniciar sesión</a>
      </div>
    </div>
  );
};

export default LoginForm;
