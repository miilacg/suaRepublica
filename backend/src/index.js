require('dotenv').config();
const express = require("express");
const cors = require('cors');

const app = express();

const router = require('./router');

const PORT = process.env.PORT || 8080;


app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));