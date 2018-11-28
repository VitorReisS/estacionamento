const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cliente',
            required: true
        },
        tipo_veicu: {
            type: String,
            required: true
        },
        placa_veicu: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Veiculo', schema, 'veiculos');

};