const express = require('express');
const signIn = require('../services/users/signIn');

const router = express.Router();


router.post('/auth', signIn);


module.exports = router;