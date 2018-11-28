let Registro = require('../models/Registro')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        Registro.create(req.body).then(
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

        Registro.find().populate('veiculo').exec().then(
            function(registros) {
                res.json(registros).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.obterUm = function(req, res) {

        Registro.findById(req.params.id).exec().then(
            function(registro) {
                if(registro) {
                    res.json(registro).end();
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

        Registro.findByIdAndUpdate(req.body._id, req.body).exec().then(
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

        Registro.findByIdAndRemove(req.params.id).exec().then(
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