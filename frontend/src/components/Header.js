import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AuthContext } from '../config/store';

import '../style/Header.css';

function Header({ titulo }) {
  const { auth } = useContext(AuthContext);

  const [openMenu, setOpenMenu] = useState(false);
  const open = Boolean(openMenu);

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
          <MenuItem onClick={() => { localStorage.removeItem('user'); setOpenMenu(false); }}>
            <p> Sair </p>
          </MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Header;