import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext([{}, () => {}]);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const login = (email, senha) => {
    axios.post('http://localhost:8080/auth', { senha, email })
      .then((res) => {
        navigate('/');
        console.log('console res.data ', res.data);
        setAuth(res.data);
      })
      .catch((err) => {
        console.log('err ', err);
        const mensagem = err?.response?.data?.error?.description || 'Tente novamente mais tarde'
        console.log('mensagem ', mensagem);
        //setError(mensagem);
      });
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  )
}