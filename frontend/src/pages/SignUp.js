import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

import '../style/SignUp.css';


function SignUp() {
  return (
    <div className='signUp'>
      <div className='card'>
        <img src={logo} alt='logo do Sua República' />
        <form className='form'>
          <div>
            <div className='formControl'>
              <label>Nome completo</label>
              <input type='text' placeholder='Digite seu nome completo' />
            </div>
            <div className='formControl'>
              <label>Nome do usuário</label>
              <input type='text' name='nome' placeholder='Escolha um nome de usuário' />
            </div>
          </div>
          <div>
            <div className='formControl'>
              <label>Endereço de e-mail</label>
              <input type='email' name='email' placeholder='Digite seu e-mail' />
            </div>
            <div className='formControl'>
              <label>Confirme o e-mail</label>
              <input type='email' name='confirmeEmail' placeholder='Confirme o e-mail' />
            </div>
          </div>
          <div>
            <div className='formControl'>
              <label>Data de nascimento</label>
              <input type='date' name='dataNascimento' placeholder='dd/mm/aaaa' />
            </div>
            <div className='formControl'>
              <label>Senha</label>
              <input type='password' name='senha' placeholder='Digite seu e-mail' />
            </div>
          </div>
          <div>
            <div className='formControl'>
              <label>Confirme a senha</label>
              <input type='password' name='confirmeSenha' placeholder='Confirme o e-mail' />
            </div>
            <div className='formControl radio'>
              <label>Sexo</label>
              <div>
                <div>
                  <input type='radio' name='sexo' value='Masculino' />
                  <label for='masculino'>M</label>
                </div>
                <div>
                  <input type='radio' name='sexo' value='Feminino' />
                  <label for='feminino'>F</label>
                </div>
                <div>
                  <input type='radio' name='sexo' value='Outro' />
                  <label for='outro'>Outro</label>
                </div>
              </div>
            </div>
          </div>
          <button className='button primary' type='submit'>
            Registre-se
          </button>
        </form>
        <h4>Já tem uma conta? <Link href=''>Log in</Link></h4>
      </div>
    </div>
  );
}

export default SignUp;