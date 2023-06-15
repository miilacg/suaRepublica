import { Link } from 'react-router-dom';

import '../style/Menu.css';

import logo from '../assets/images/logo.svg';

function Menu() {
  return (
    <div className='menu'>
      <img src={logo} alt='logo do Sua República' />
      <hr />
      <div className='menu-item'>        
        <Link href=''>Perfil do usuário</Link>
        <Link href=''>Pesquisar vagas</Link>
        <Link href=''>Pesquisar repúblicas</Link>
        {/* <Link href=''>Visualizar república</Link> verificar se esse topico faz sentido mesmo*/}
        {/* <Link href=''>Gerenciar república</Link> verificar se esse topico faz sentido mesmo*/}
        {/** talvez faça mais sentido tirar esses tópicos e deixar as duas funcionalidades
         * serm feitas apenas clicando na república
         */}
      </div>
    </div>
  );
}

export default Menu;