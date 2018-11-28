// Criando um objeto vazio e imutavel
const controller = {};

/* Toda função de controller tem pelo menos dois parametros:
    1- parametro: req = requisição recebido
    2- parametro: res = resposta a ser devolvida ao cliente*/
controller.ola_mundo = function(req, res) {
    res.send('Olá mundo!');
}

/* Exportando este controller para que ele passa ser usado
    em outros lugares da aplicação*/
module.exports = controller;