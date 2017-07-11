'use strict';
require('../utils/autoload')();
let User = autoload('app/models/User');

User.sync().then(() => {
  console.log('Table "User" created');
});