'use strict';

/*
 * User Route
 * path: /todos
 */

let express = require('express');
let jwt = require('express-jwt');
let Controller = autoload('./app/controllers/UsersController');

let router = express.Router();

let config = require('../../config.json');

const secret = config.secret;

router.post('/', Controller.create); // POST /users
router.get('/me', [jwt({secret: secret})], Controller.me) // GET /users/me

module.exports = router;
