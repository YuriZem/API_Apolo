permissaoModal = require('../models/permissaoModel')


const cadastrarPermissao = async(req, res) => {
    console.log('batataS')
    console.log('saokidnosandasndjasndjki')
    permissaoModal.cadastrarPermissao(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}

const listarPermissoes = async(req, res) => {
    permissaoModal.listarPermissoes(req.body, res).then(r => {
        return res.status(201).json({arrayPermissoes: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

const salvarEditarPermissao = async(req, res) => {
    permissaoModal.salvarEdicaoPermissao(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Unidade Salva com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}

const desativarPermissao = async(req, res) => {
    permissaoModal.desativarPermissao(req.body, res).then(r => {
        return res.status(201).json({arrayUnidades: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

const getPermissaoPorCod = async(req, res) => {
    permissaoModal.getPermissaoPorCod(req.body, res).then(r => {
        return res.status(201).json({permisao: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

module.exports = {
    cadastrarPermissao,
    listarPermissoes,
    salvarEditarPermissao,
    desativarPermissao,
    getPermissaoPorCod
}