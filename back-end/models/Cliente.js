const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        data_nasci: {
            type: Date,
            required: true
        },
        cpf: {
            type: Number,
            required: true
        },
        rg: {
            type: Number,
            required: true
        },
        nome_rua: {
            type: String,
            required: true
        },
        num_casa: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Cliente', schema, 'clientes');

};