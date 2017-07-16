'use strict';

let db = require('../../config/db');
let User = require('./User');
let Restourant = db.define('restourant', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});
Restourant.belongsTo(User);
module.exports = Restourant;