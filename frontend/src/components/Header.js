import '../style/Header.css';

function Header({ titulo }) {
  return (
    <header className='header'>
      <h3 className='titulo'>{ titulo }</h3>
      <h5 className='subtitle'>Nome do usuário</h5>
    </header>
  );
}

export default Header;