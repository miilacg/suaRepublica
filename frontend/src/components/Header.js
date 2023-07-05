import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../config/store';

import '../style/Header.css';

function Header({ titulo }) {
  const { auth } = useContext(AuthContext);

  return (
    <header className='header'>
      <h3 className='titulo'>{ titulo }</h3>
      {auth ? (
        <h5 className='subtitle'>{auth.nome}</h5>
      ) : (
        <button className='button primary'>
          <Link to='./login' style={{color: 'white'}}>Login</Link>
        </button>
      )}
    </header>
  );
}

export default Header;