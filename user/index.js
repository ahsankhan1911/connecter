const express = require('express');
const router = express.Router();
const user  = require('./Controller');

router.post('/signup' ,user.UserSignUp);