const express = require('express');
const republics = require('./routes/republics');
const users = require('./routes/users');

const router = express.Router();

router.use(express.json());


router.use(republics);
router.use(users);


module.exports = router;