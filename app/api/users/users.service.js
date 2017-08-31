'use strict';

let User = require('./users.model');

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
