'use strict';

let jwt = require('jsonwebtoken');
let config = require('../../../config.json');

const secret = config.secret;

let service = {

  createToken: function(user){

    var token = jwt.sign(user, secret, {
      expiresIn: 1440 * 60
    });

    return token;
  }
};

module.exports = service;
