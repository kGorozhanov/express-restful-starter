'use strict';

module.exports = [
  {
    path: '/users',
    middleware: [],
    handler: require('./routes/UsersRoute')
  },
  {
    path: '/restourants',
    middleware: [],
    handler: require('./routes/RestourantsRoute')
  },
  {
    path: '/jwt',
    middleware: [],
    handler: require('./routes/JWTRoute')
  }
];
