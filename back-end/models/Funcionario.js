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
        email: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Funcionario', schema, 'funcionario')

};