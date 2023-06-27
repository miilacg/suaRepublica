const express = require('express');
const users = require('./routes/users');

const router = express.Router();

router.use((req, res) => {
  res.send('pagina inicial');
});

router.use(users);


module.exports = router;