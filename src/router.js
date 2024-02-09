const express = require('express')
const router = express.Router();

// import controllers
const usuarioController = require('./controllers/usuarios.controller')
const produtoController = require('./controllers/produtos.controller')
const pedidoController = require('./controllers/pedidos.controller')
const loginController = require('./controllers/login.controller')

//import Middleware
const usuarioMiddleware = require('./middlewares/usuario.middleware')
const produtoMiddleware = require('./middlewares/produto.middleware')
const pedidoMiddleware = require('./middlewares/pedido.middleware')
const loginMiddleware = require('./middlewares/login.middleware')


// rotas de teste
router.get('/',(req, res) => res.status(200).send('aqui um teste '))


// USUARIO
// router.post('/listarUsuarios',usuarioMiddleware.validaListarUsuario,(req, res) => usuarioController.listarUsuarios(req, res))
router.post('/cadastrarUsuario',(req, res) => usuarioController.criarUsuario(req, res))
// router.post('/editarUsuario',usuarioMiddleware.validaEditarUsuario,(req, res) => usuarioController.editarUsuario(req, res))
// router.post('/removerUsuario',usuarioMiddleware.validaRemoverUsuario,(req, res) => usuarioController.removerUsuario(req, res))


// PRODUTO
// router.post('/cadastrarProduto',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))
router.post('/listarProdutos',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => produtoController.listarProdutos(req, res))
// router.post('/editarProduto',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))


// PEDIDO
// router.post('/criarPedido',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))
// router.post('/listarPedido',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))
// router.post('/editarPedido',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))
// router.post('/alterarStatus',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))


// // LOGIN
// router.post('/validarLogin',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))


module.exports = router;
