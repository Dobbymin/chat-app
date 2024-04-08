const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

mongoose
    // .connect(process.env.DB, { userNewUrlParser: true, useUnifiedTopology: true })
    .connect(process.env.DB)
    .then(() => console.log('connected'));

module.exports = app;
