const connection = require('../../connection');

const list = async (req, res) => {
  return connection.query(`
    SELECT Republica.*, Endereco.*
    FROM Republica
      INNER JOIN Endereco ON Endereco.Republica_id_republica = id_Republica
  `).then((result) => {
    return res.status(200).json(result[0]);
  }).catch((err) => {
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        description: err.message.toString(),
        stack: err.stack,
      },
    });
  });  
};

module.exports = list;