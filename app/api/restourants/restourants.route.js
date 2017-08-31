'use strict';

/*
 * Restourant Route
 * path: /todos
 */

let express = require('express');
let jwt = require('express-jwt');
let Controller = require('./restourants.controller');
let config = require('../../../config.json');
let rolesMiddlewares = require('../../middlewares/roles.middleware');

let router = express.Router();

const secret = config.secret;

router.post('/', [jwt({secret: secret})], rolesMiddlewares.hasRole('manager'), Controller.create); // POST /restourants
router.get('/', [jwt({secret: secret})], rolesMiddlewares.hasRole('manager'), Controller.myRestourants); // GET /restourants
router.get('/:id', [jwt({secret: secret})], rolesMiddlewares.hasRole('manager'), Controller.findById); // GET /restourant by id

module.exports = router;
