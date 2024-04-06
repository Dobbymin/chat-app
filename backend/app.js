import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
    .connect('DB Address', { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'));

module.exports = app;
