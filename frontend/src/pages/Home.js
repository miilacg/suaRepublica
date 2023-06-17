import BaseTemplate from '../components/BaseTemplate';
import RepublicTable from '../components/RepublicTable';

import '../style/Button.css';
import '../style/Home.css';


function Home() {
  return (
    <BaseTemplate>
      <div className='card'>
        <div className='card-header'>
          <h2>Repúblicas</h2>
          <button className='button primary'>Cadastrar república</button>
        </div>
        <RepublicTable />
      </div>
    </BaseTemplate>
  );
}

export default Home;