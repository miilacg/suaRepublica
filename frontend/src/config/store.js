import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext([{}, () => {}]);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem('user');
  const [auth, setAuth] = useState(loggedInUser || null);
  const [error, setError] = useState(false);

  const login = (email, senha) => {
    axios.post('http://localhost:8080/auth', { senha, email })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        setAuth(res.data);
        navigate('/');
      })
      .catch((err) => {
        const mensagem = err?.response?.data?.error?.description || 'Tente novamente mais tarde'
        setError(mensagem);
      });
  }

  return (
    <AuthContext.Provider value={{ auth, error, login }}>
      {children}
    </AuthContext.Provider>
  )
}