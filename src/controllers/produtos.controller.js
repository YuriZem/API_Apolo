prodModel = require('../models/produtoModel')


const listarProdutos = async(req, res) => {
    // prodModel.listarProdutos(req.body,res).then(r => {

    //     return res.status(201).json({arrayItens: r});
    // }).catch(e =>{
    //     console.log('aqui o de verdade',e)
    //     return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    // });
    console.log('áqui o teste ')

   const teste = await prodModel.listarProdutos(req.body,res)
}

const cadastroProduto = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    prodModel.cadastrarProduto(req.body,res)
    // .then(r => {
    //     return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    // }).catch(e => {
    //     return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    // })
}

const getProdEdicao = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    prodModel.getProdEdicao(req.body,res).then(r => {
        return res.status(201).json({prod: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}
const salvarEdicaoProduto = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    prodModel.salvarEdicaoProduto(req.body,res)
    // .then(r => {
    //     return res.status(201).json({prod: r})
    // }).catch(e => {
    //     return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    // })
}

module.exports = {
    listarProdutos,
    cadastroProduto,
    getProdEdicao,
    salvarEdicaoProduto
}