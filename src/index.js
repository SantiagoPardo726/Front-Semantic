import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';
import { AuthProvider } from './components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={appRouter}/>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
