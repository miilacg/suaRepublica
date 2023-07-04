import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext([{}, () => {}]);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState(false);

  const login = (email, senha) => {
    axios.post('http://localhost:8080/auth', { senha, email })
      .then((res) => {
        navigate('/');
        setAuth(res.data);
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