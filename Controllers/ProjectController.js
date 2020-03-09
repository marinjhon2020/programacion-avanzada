"use strict";

var controller = {
    home: function home(req, res) {
        return res.send({
            message: "Hola soy la home"
        });
    },
    cesde: function cesde(req, res) {
        return res.send({
            message: "Hola soy cesde"
        });
    },
    data: function data(req, res) {
        return res.send({
            message: "HOla soy data"
        });
    }
};

module.exports = controller;