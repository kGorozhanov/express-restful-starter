'use strict';

let RestourantsService = require('./restourants.service');
let controller = {
    create(req, res){
        let params = {
            name: req.body.name,
            userId: req.user.id
        };

        RestourantsService.create(params)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    },
    myRestourants(req, res) {
        RestourantsService.findUserRestourants(req.user.id)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    },
    findById(req, res) {
        RestourantsService.findById(req.params.id)
            .then(data => {
                if(!data) return res.status(404).json({eror: 'not found'});
                res.status(200).json(data)
            })
            .catch(err => res.status(500).json(err));
    }
}
module.exports = controller;