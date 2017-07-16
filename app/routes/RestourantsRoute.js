'use strict';

/*
 * Restourant Route
 * path: /todos
 */

let express = require('express');
let jwt = require('express-jwt');
let Controller = require('../controllers/RestourantsController');
let config = require('../../config.json');
let rolesMiddlewares = require('./../middlewares/RolesMiddleware');

let router = express.Router();

const secret = config.secret;

router.post('/', [jwt({secret: secret})], rolesMiddlewares.hasRole('manager'), Controller.create); // POST /restourants
router.get('/', [jwt({secret: secret})], rolesMiddlewares.hasRole('manager'), Controller.myRestourants); // GET /restourants

module.exports = router;
