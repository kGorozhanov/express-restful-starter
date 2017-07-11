'use strict';

let middleware = {
    hasRole: (role) => (req, res, next) => {
        let user = req.user;
        if (user && user.role === role) return next();

        res.status(403).send({
            error: 'access denied'
        });
    },

    hasAnyRole: (roles) => (req, res, next) => {
        let user = req.user;
        for(let role of roles) {
            if (user && user.role === role) {
                return next();
            }
        }

        res.status(403).send({
            error: 'access denied'
        });
    }
}

module.exports = middleware;