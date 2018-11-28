let Pagamento = require('../models/Pagamento')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        Pagamento.create(req.body).then(
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

        Pagamento.find().populate('login').populate('veiculo').exec().then(
            function(pagamentos) {
                res.json(pagamentos).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.obterUm = function(req, res) {
        Pagamento.findById(req.params.id).exec().then(
            function(pagamento) {
                if(pagamento) {
                    res.json(pagamento).end();
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
        Pagamento.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        Pagamento.findByIdAndRemove(req.params.id).exec().then(
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