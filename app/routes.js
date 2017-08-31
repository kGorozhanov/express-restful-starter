'use strict';

module.exports = [
  {
    path: '/users',
    middleware: [],
    handler: require('./api/users/users.route')
  },
  {
    path: '/restourants',
    middleware: [],
    handler: require('./api/restourants/restourants.route')
  },
  {
    path: '/jwt',
    middleware: [],
    handler: require('./api/jwt/jwt.route')
  }
];
