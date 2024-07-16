const express = require('express')
const router = express.Router();

// import controllers
const usuarioController = require('./controllers/usuarios.controller')
const produtoController = require('./controllers/produtos.controller')
const pedidoController = require('./controllers/pedidos.controller')
const loginController = require('./controllers/login.controller')
const unidadeController = require('./controllers/unidade.controller')
const grupoController = require('./controllers/grupo.controller')
const fornecedorController = require('./controllers/fornecedor.controller')
const permissaoController = require('./controllers/permissao.controller')
const empresaController = require('./controllers/empresa.controller')
const estoqueController = require('./controllers/estoque.controller')

//import Middleware
const usuarioMiddleware = require('./middlewares/usuario.middleware')
const produtoMiddleware = require('./middlewares/produto.middleware')
const pedidoMiddleware = require('./middlewares/pedido.middleware')
const loginMiddleware = require('./middlewares/login.middleware')


// rotas de teste
router.get('/',(req, res) => res.status(200).send('aqui um teste '))


// USUARIO
router.post('/listarUsuarios',(req, res) => usuarioController.listarUsuarios(req, res))
router.post('/cadastrarUsuario',(req, res) => usuarioController.cadastrarUsuario(req, res))
router.post('/salvarEdicaoUsuario',(req, res) => usuarioController.salvarEdicaoUsuario(req, res))
router.post('/desativarUsuario',(req, res) => usuarioController.desativarUsuario(req, res))
router.post('/getInfoUsuario',(req, res) => usuarioController.getInfoUsuario(req, res))
router.post('/getInfoUsuarioPorToken',(req, res) => usuarioController.getInfoUsuarioPorToken(req, res))


// PRODUTO
router.post('/cadastrarProduto',(req, res) => produtoController.cadastroProduto(req, res))
router.post('/listarProdutos',(req, res) => produtoController.listarProdutos(req, res))
router.post('/getProdEdicao', (req, res) => produtoController.getProdEdicao(req, res))
router.post('/salvarEdicaoProduto', (req, res) => produtoController.salvarEdicaoProduto(req, res))
// router.post('/editarProduto',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))


// PEDIDO
router.post('/criarPedido',(req, res) => pedidoController.cadastrarPedido(req, res))
router.post('/listarPedidos',(req, res) => pedidoController.listarPedidos(req, res))
// router.post('/editarPedido',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))
// router.post('/alterarStatus',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))


// // LOGIN
router.post('/validaLogin',(req, res) => loginController.validarLogin(req, res))
router.post('/verificaToken',(req, res) => loginController.verificaToken(req, res))
// router.post('/validarLogin',usuarioMiddleware.validaBodyCriarUsuario,(req, res) => usuarioController.criarUsuario(req, res))

// UNIDADE
router.post('/cadastrarUnidade',(req, res) => unidadeController.cadastrarUnidade(req, res))
router.post('/listarUnidades',(req, res) => unidadeController.listarUnidades(req, res))
router.post('/salvarEdicaoUnidade',(req, res) => unidadeController.salvarEdicaoUnidade(req, res))
router.post('/desativarUnidade',(req, res) => unidadeController.desativarUnidade(req, res))

//GRUPO
router.post('/cadastrarGrupo',(req, res) => grupoController.cadastrarGrupo(req, res))
router.post('/listarGrupos',(req, res) => grupoController.listarGrupos(req, res))
router.post('/salvarEdicaoGrupo',(req, res) => grupoController.salvarEdicaoGrupo(req, res))
router.post('/desativarGrupo',(req, res) => grupoController.desativarGrupo(req, res))

//FORNECEDOR
router.post('/cadastrarFornecedor',(req, res) => fornecedorController.cadastrarFornecedor(req, res))
router.post('/listarFornecedores',(req, res) => fornecedorController.listarFornecedores(req, res))
router.post('/salvarEdicaoFornecedor',(req, res) => fornecedorController.salvarEdicaoFornecedor(req, res))
router.post('/desativarFornecedor',(req, res) => fornecedorController.desativarFornecedor(req, res))


//PERMISSAO
router.post('/cadastrarPermissao',(req, res) => permissaoController.cadastrarPermissao(req, res))
router.post('/listarPermissoes',(req, res) => permissaoController.listarPermissoes(req, res))
router.post('/salvarEdicaoPermissao',(req, res) => permissaoController.salvarEditarPermissao(req, res))
router.post('/desativarPermissao',(req, res) => permissaoController.desativarPermissao(req, res))
router.post('/getPermissaoPorCod',(req, res) => permissaoController.getPermissaoPorCod(req, res))

//EMPRESA 
router.post('/listarEmpresas',(req, res) => empresaController.listarEmpresas(req, res))


// ESTOQUE
router.post('/ajustaEstoque', (req,res) => estoqueController.ajustaEstoque(req,res))

module.exports = router;
