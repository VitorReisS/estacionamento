const controller = require('../controllers/funcionario');
const express = require('express');
const router = express.Router();

router.put('/', controller().novo);
router.get('/', controller().listar);
router.get('/:id', controller().obterUm);
router.patch('/', controller().atualizar);
router.delete('/:id', controller().excluir);

module.exports = router;