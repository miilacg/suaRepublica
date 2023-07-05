import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../config/store';

import logo from '../assets/images/logo.svg';

import '../style/components/Menu.css';


function Menu() {
  const { auth } = useContext(AuthContext);

  return (
    <div className='menu'>
      <img src={logo} alt='logo do Sua República' />
      <hr />
      <div className='menu-item'>
        {auth && (
          <>
            <Link href=''>Perfil do usuário</Link>
            <Link href=''>Minhas repúblicas</Link>
          </>
        )}      
        <Link href=''>Pesquisar vagas</Link>
        <Link href=''>Pesquisar repúblicas</Link>
      </div>
    </div>
  );
}

export default Menu;