// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Realiza aquí la lógica de autenticación (por ejemplo, una llamada a una API)
    // y establece el usuario en el estado
    setUser({ username });
  };

  const logout = () => {
    // Realiza aquí la lógica de cierre de sesión y establece el usuario en null
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
