let Veiculo = require('../models/Veiculo')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        Veiculo.create(req.body).then(
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

        Veiculo.find().populate('cliente').exec().then(
            function(veiculos) {
                res.json(veiculos).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.obterUm = function(req, res) {
        Veiculo.findById(req.params.id).exec().then(
            function(veiculo) {
                if(veiculo) {
                    res.json(veiculo).end();
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
        Veiculo.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        Veiculo.findByIdAndRemove(req.params.id).exec().then(
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