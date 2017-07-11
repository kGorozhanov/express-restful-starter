'use strict';

let UsersService = autoload('./app/services/UsersService');
let Promises = require("bluebird");

let controller = {

    create: function (req, res) {

        let params = {
            email: req.body.email,
            password: req.body.password,
            role: 'manager'
        };

        let query = UsersService.create(params);

        query.then((result) => {
            res.send(result);
        });

        query.catch((err) => {
            res.status(400).send(err);
        });
    },

    me: (req, res) => {
        let params = {
            id: req.user.id
        };

        let query = UsersService.findOne(params);

        query.then(user => {
            if (!user) {
                res.status(404).send({
                    error: 'Not found'
                });
            }
            res.send(user)
        });

        query.catch(err => {
            res.status(500).send(err);
        });
    }
};

module.exports = controller;
