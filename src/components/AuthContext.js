// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  )


  const updateUser = (userParam) => {
    console.log("Antes");
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user))
    setUser(userParam);
    console.log("lo que entra")
    console.log(userParam)

    console.log("Despues");
    console.log(user);

  }
  

  return (
    <AuthContext.Provider value={{ user, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};

