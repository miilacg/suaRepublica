const crypto = require('crypto-js/sha256');
var Base64 = require('crypto-js/enc-base64');

const connection = require('../../connection');

module.exports = async (req, res) => {
  const { email, senha } = req.body;

  if(!email || !senha) {
    return res.status(400).send({
      error: {
        code: 'MALFORMED_REQUEST',
        description: 'Algum campo está em branco. Favor verificar',
      },
    });
  }

  const hash = Base64.stringify(crypto(senha));

  connection.query(
    `SELECT id_usuario AS id, nome, republicas_favoritas, usuario
    FROM Usuario
    WHERE email LIKE '${email}' AND senha = '${hash}' AND deletedAt IS NULL`,
  ).then(async (result) => {
    if (result[0].length === 0) {
      return res.status(403).json({
        error: {
          code: 'INVALID_CREDENTIALS',
          description: 'E-mail ou senha incorretos! Por favor, verifique!',
        },
      });
    }

    return res.status(200).json(result[0][0]);
  }).catch((err) => {
    return res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        description: err.message.toString(),
        stack: err.stack,
      },
    });
  });
};
