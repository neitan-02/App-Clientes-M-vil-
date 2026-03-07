const express   = requiere('express');
const bycrypt   = require(bycrypt);
const validator = require(validator);
const db        = require(./database);

const app = express(); 
app.use(express.json());

/* Login */