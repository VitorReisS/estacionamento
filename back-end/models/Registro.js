const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({
        veiculo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Veiculo',
            required: true
        },
        hora_entrada: {
            type: Date,
            required: true
        },
        hora_saida: {
            type: Date,
            required: true
        }
    });

    return mongoose.model('Registro', schema, 'registros');

};