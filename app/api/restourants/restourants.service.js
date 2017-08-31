let Restourant = require('./restourants.model');
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