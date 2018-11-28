let Item = require('../models/Item')(/* construtor */);

module.exports = function() {

    const controller = {}; //Obbjeto vazio

    controller.novo = function(req, res) {
        /* Criar um novo item a partir dos dodos
        do corpo do quequisição*/

        Item.create(req.body).then(
            // Callback
            function() {
                // HTTP 201: Criado
                res.status(201).send();
            },
            function(erro) {
                // HTTP 500: Erro inteiro do servidor
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    controller.listar = function(req, res) {

        Item.find().populate('tipo').populate('linha').populate('tamanho').exec().then(
            //Foi bem
            function(itens) {
                //Retorna os itens encontrados com status HTTP 200 (ok)
                res.json(itens).end();
            },
            //Deu ruim
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    //findById(): procura um objeto por seu id. Encontra 0 ou 1 ocorrencia
    controller.obterUm = function(req,res) {
        Item.findById(req.params.id).exec().then(
            function(item) {
                if(item) { //Encontrou o item (não vazio)
                    //Retorna o item encontrado com status HTTP 200
                    res.json(item).end();
                }
                else {
                    //HTTP 404: Não encontrado
                    res.status(404).end();
                }
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    //findByIdAndUpdate(): procura um objeto pelo id passado
    // e promove as atualizacao prevista no req.body
    controller.atualizar = function(req,res) {
        Item.findByIdAndUpdate(req.body._id, req.body).exec().then(
            //Foi bem
            function() {
                //HTTP 204: OK, sem conteudo
                res.status(204).end();
            },
            function(erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
    }

    //findByIdAndRemove(): encontra o objeto especificado pelo id e o exclui do BD
    controller.excluir = function(req, res) {
        Item.findByIdAndRemove(req.params.id).exec().then(
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