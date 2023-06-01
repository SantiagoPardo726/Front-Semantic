import React from 'react';
import '../styles/login.css';
import LoginForm from '../components/LoginForm';
import { AuthProvider } from '../components/AuthContext';

const Login = () => {
    return (
        <AuthProvider>
            <div class="container">
                <div className="centered-content">
                    <LoginForm />
                </div>
            </div>
        </AuthProvider>
    );
}

export default Login;