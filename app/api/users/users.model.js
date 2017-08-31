'use strict';

let db = require('../../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let User = db.define('user',
    {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: db.Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: db.Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        role: {
            type: db.Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {
        instanceMethods: {
            comparePassword: function (candidatePassword, cb) {
                bcrypt.compare(candidatePassword, this.getDataValue('password'), function (err, isMatch) {
                    if (err) return cb(err);
                    cb(null, isMatch);
                });
            },
            toJSON: function () {
                var values = Object.assign({}, this.get());

                delete values.token;
                delete values.password;
                return values;
            }
        },
        hooks: {
            beforeCreate: function (user, options) {
                let salt = bcrypt.genSaltSync(saltRounds);
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    });

module.exports = User;
