'use strict';

let User = require('../app/models/User');
let Restourant = require('../app/models/Restourant');

User.sync().then(() => {
  console.log('Table "User" created');
});

Restourant.sync().then(() => {
  console.log('Table "Restourant" created');
});