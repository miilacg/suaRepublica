const express = require('express');
const list = require('../services/republics/list');

const router = express.Router();


router.get('/republics/list', list);


module.exports = router;