'use strict';

let User = require('../app/models/User');

User.sync().then(() => {
  console.log('Table "User" created');
});

let Restourant = require('../app/models/Restourant');

Restourant.sync().then(() => {
  console.log('Table "Restourant" created');
});