const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({
        funcionario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Funcionario',
            required: true
        },
        veiculo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Veiculo',
            required: true
        },
        data_pagamento: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Pagamento', schema, 'pagamentos');

};