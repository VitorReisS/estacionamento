const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        placa_veicu: {
            type: String,
            required: true
        },
        tipo_veicu: {
            type: String,
            required: true
        },
        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cliente',
        }
    });

    return mongoose.model('Veiculo', schema, 'veiculos');

};