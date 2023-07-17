import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';

import CircularProgress from '@mui/material/CircularProgress';

import '../style/components/RepublicTable.css';

function RepublicTable() {
  const [republicas, setRepublicas] = useState(null);

  useEffect(() => {
    if (republicas === null) {
      axios.get('http://localhost:8080/republics/list')
      .then((res) => {
        setRepublicas(res.data);
      })
      .catch((err) => {
        const mensagem = err?.error?.description || 'Tente novamente mais tarde'
  
        Swal.fire({
          icon: 'error',
          title: 'Ocorreu um erro!',
          text: mensagem,
        })
      });
    }
  }, [republicas]);  

  return (
    <>
      {!republicas ? (
        <div className='loading'>
          <CircularProgress />
        </div>
      ) : (
        republicas.length === 0 ? (
          <h5 style={{ textAlign: 'center', color: 'rgba(128, 128, 128, 1)' }}>
            Ainda não tem repúblicas cadastradas
          </h5>
        ) : (
          <table className='table' cellspacing='0'>
            <thead>
              <th>Nome</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Vagas</th>
            </thead>
            <tbody>
              {republicas.map((republica) => (           
                <tr key={republica.id}>
                  <td>{republica.nome}</td>
                  <td>{republica.municipio} - {republica.estado}</td>
                  <td>{republica.bairro}</td>
                  <td>{republica.qtd_vagas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </>    
  );
}

export default RepublicTable;