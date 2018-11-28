var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/database');

//mongodb:// -> protocolo de conexão ao MongoDB
//localhost -> nome do servidor (no caso, a maquina local)
//:27017 -> porta onde o servidor do MongoDB espera por conexão
//estacionamento -> nome do banco de dados
db('mongodb://localhost:27017/estacionamento');

// CORS = Cross-Origin Resource Sharing. Permite que o
// front-end acesse o back-end a partir de um servidor:porta
// diferente
let cors = require('cors');
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Adicionando uma nova rota a aplicação
const teste = require('./routes/teste');
app.use('/ola', teste);

const cliente = require('./routes/cliente');
app.use('/cliente', cliente);

const veiculo = require('./routes/veiculo');
app.use('/veiculo', veiculo);

const funcionario = require('./routes/funcionario');
app.use('/funcionario', funcionario);

const registro = require('./routes/registro');
app.use('/registro', registro);

const pagamento = require('./routes/pagamento');
app.use('/pagamento', pagamento);

const item = require('./routes/item');
app.use('/item', item);

module.exports = app;