import '../style/RepublicTable.css';

function RepublicTable() {
  return (
    <table className='table' cellspacing='0'>
      <thead>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Bairro</th>
        <th>Vagas</th>
      </thead>
      <tbody>
        <tr>
          <td>República 1</td>
          <td>Cidade - MG</td>
          <td>Bairro</td>
          <td>2</td>
        </tr>
        <tr>
          <td>República 2</td>
          <td>Cidade - MG</td>
          <td>Bairro</td>
          <td>0</td>
        </tr>
        <tr>
          <td>República 3</td>
          <td>Cidade - MG</td>
          <td>Bairro</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RepublicTable;