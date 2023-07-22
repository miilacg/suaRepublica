import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AuthContext } from '../config/store';

import '../style/components/Header.css';

function Header({ titulo }) {
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const open = Boolean(openMenu);

  const logout = () => {
    localStorage.removeItem('user'); 
    setAuth(null);
    setOpenMenu(false); 
    navigate('/');
  }

  return (
    <>
      <header className='header'>
        <h3 className='titulo'>{ titulo }</h3>
        {auth ? (
          <button className='header-button' onClick={() => setOpenMenu(true)}>{auth.nome}</button>
        ) : (
          <button className='button primary'>
            <Link to='./login' style={{color: 'white'}}>Login</Link>
          </button>
        )}      
      </header>
      {openMenu && (
        <Menu
          anchorEl={openMenu}
          open={open}
          onClose={() => setOpenMenu(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={logout}>
            <p> Sair </p>
          </MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Header;