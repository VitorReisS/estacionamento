let Cliente = require('../models/Cliente')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        Cliente.create(req.body).then(
            function() {
                res.status(201).send();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.listar = function(req, res) {

        Cliente.find().populate('cliente').exec().then(
            function(clientes) {
                res.json(clientes).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.obterUm = function(req, res) {
        Cliente.findById(req.params.id).exec().then(
            function(cliente) {
                if(cliente) {
                    res.json(cliente).end();
                }
                else {
                    res.status(404).end();
                }
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.atualizar = function(req, res) {
        Cliente.findByIdAndUpdate(req.body._id, req.body).exec().then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.excluir = function(req, res) {
        Cliente.findByIdAndRemove(req.params.id).exec().then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    return controller;

}