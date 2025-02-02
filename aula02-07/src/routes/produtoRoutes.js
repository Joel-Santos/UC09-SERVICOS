const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();

router.get('/listar', produtoController.listarProdutos);
router.post('/criar', produtoController.criarProduto);
router.put('/atualizar/:id', produtoController.atualizarProduto);
router.delete('/deletar/:id', produtoController.deletarProduto);

module.exports = router;