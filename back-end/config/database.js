const mongoose = require('mongoose');

module.exports = function (uri){
    mongoose.connect(uri, {useNewUrlParser: true});

    mongoose.connection.on('connected', function() {
        console.log('Mongoose! conectado e escutando na porta :27017');
    });
    
    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose! desconectado');
    });
    
    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! ERRO: não foi possivel conectar a ' + uri + '. MOTIVO: ' + erro);
    });

    // Copturamos um sinal de encerramento (SIGINT), ctrl+C
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! Desconectado pelo término da aplicação');
            // O indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });
} 