const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({
        veiculo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Veiculo',
            required: true
        },
        data_entrada: {
            type: Date,
            required: true
        },
        hora_entrada: {
            type: String,
            required: true
        },
        data_saida: {
            type: Date
        },
        hora_saida: {
            type: String
        }
    });

    return mongoose.model('Registro', schema, 'registros');

};