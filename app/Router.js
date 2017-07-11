'use strict';

module.exports = [
  {
    path: '/users',
    middleware: [],
    handler: autoload('./app/routes/UsersRoute')
  },
  {
    path: '/jwt',
    middleware: [],
    handler: autoload('./app/routes/JWTRoute')
  }
];
