const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose
    .connect(process.env.DB, { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'));

module.exports = app;
