fornecedorModel = require('../models/fornecedorModel')


const cadastrarFornecedor = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    fornecedorModel.cadastrarFornecedor(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}

const listarFornecedores = async(req, res) => {
    fornecedorModel.listarFornecedores(req.body, res).then(r => {
        return res.status(201).json({arrayFornecedor: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Fornecedor'})
    })
}

const salvarEdicaoFornecedor = async(req, res) => {
    fornecedorModel.salvarEdicaoFornecedor(req.body, res).then(r => {
        return res.status(201).json({mensagem: 'Fornecedor Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Fornecedor'})
    })
}

const desativarFornecedor = async(req, res) => {
    fornecedorModel.desativarFornecedor(req.body, res).then(r => {
        return res.status(201).json({mensagem: 'Fornecedor Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Fornecedor'})
    })
}

module.exports = {
    cadastrarFornecedor,
    listarFornecedores,
    salvarEdicaoFornecedor,
    desativarFornecedor
}