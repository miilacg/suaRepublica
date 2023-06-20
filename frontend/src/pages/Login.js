import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

import '../style/Login.css';


function Login() {
  return (
    <div className='login'>
      <div className='card'>
        <img src={logo} alt='logo do Sua República' />
        <form className='form'>
          <div className='formControl'>
            <label>E-mail</label>
            <input type='email' placeholder='Digite seu e-mail ou usuário' />
          </div>
          <div className='formControl'>
            <label>Senha</label>
            <input type='password'  placeholder='Digite sua senha' />
          </div>
          <button className='button primary' type='submit'>
            Login
          </button>
        </form>
        <div>
          <h4>Ainda não tem uma conta? <Link href=''>Registre-se aqui</Link></h4>
          <h4>Esqueceu a senha? <Link href=''>Recupere aqui</Link></h4>
        </div>
      </div>
    </div>
  );
}

export default Login;