let Restourant = require('./../models/Restourant');
let service = {
    create(params){
        return Restourant.create(params)
    },
    findUserRestourants(userId) {
        return Restourant.findAll({
            where: {
                userId
            }
        });
    },
    findById(id) {
        return Restourant.findById(id);
    }
};
module.exports = service;