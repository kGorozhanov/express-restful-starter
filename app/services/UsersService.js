'use strict';

let User = require('../models/User');

let service = {
  create: function(params) {
    return User.create(params);
  },
  findOne: function(params) {
    return User.findOne({
      where: params
    });
  }
};

module.exports = service;
