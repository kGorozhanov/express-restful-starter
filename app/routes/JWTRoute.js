'use strict';

/*
 * JWT Route
 * path: /jwt
 */

let express = require('express');
let Controller = require('../controllers/JWTController');
let router = express.Router();

router.post('/', Controller.createToken); // POST /jwt

module.exports = router;
