'use strict';

let JWTServices = require('../services/JWTService');
let UsersService = require('../services/UsersService');
let Promises = require("bluebird");

let controller = {

  createToken: function (req, res) {

    let params = {
      email: req.body.email
    };

    let query = UsersService.findOne(params);

    query.then(user => {
      if (!user) return res.status(400).send({ error: `user with email ${params.email} not found` });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err || !isMatch) return res.status(400).send({ error: `invalid password` });
        let token = JWTServices.createToken(user.toJSON());
        res.send({ 'token': token });
      });
    });

    query.catch(err => {
      console.log(err);
      res.status(500).end();
    })
  }
};

module.exports = controller;
