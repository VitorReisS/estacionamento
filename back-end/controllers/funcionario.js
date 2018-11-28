let Funcionario = require('../models/Funcionario')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        Funcionario.create(req.body).then(
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

        Funcionario.find().populate('pagamento').populate('cadastro').populate('cadastro_car').populate('funcionario').populate('registro').exec().then(
            function(funcionarios) {
                res.json(funcionarios).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.obterUm = function(req, res) {
        Funcionario.findById(req.params.id).exec().then(
            function(funcionario) {
                if(funcionario) {
                    res.json(funcionario).end();
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
        Funcionario.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        Funcionario.findByIdAndRemove(req.params.id).exec().then(
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