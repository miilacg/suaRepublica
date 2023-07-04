import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../config/store';

import logo from '../assets/images/logo.svg';

import '../style/Login.css';


function Login() {
  const { error, login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function submit(event){
    event.preventDefault();
    await login(email, senha);
  }

  return (
    <div className='login'  onSubmit={submit}>
      <div className='card'>
        <img src={logo} alt='logo do Sua República' />
        { error && <h4 className='error'> {error} </h4> }
        <form className='form'>
          <div className='formControl'>
            <label>E-mail</label>
            <input
              type='email'
              value={email}
              placeholder='Digite seu e-mail ou usuário'
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='formControl'>
            <label>Senha</label>
            <input
              type='password'
              value={senha}
              placeholder='Digite sua senha'
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <button className='button primary' type='submit'>
            Login
          </button>
        </form>
        <div>
          <h4>Ainda não tem uma conta? <Link to='/signup'>Registre-se aqui</Link></h4>
          <h4>Esqueceu a senha? <Link to=''>Recupere aqui</Link></h4>
        </div>
      </div>
    </div>
  );
}

export default Login;