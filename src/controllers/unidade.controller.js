unidadeModal = require('../models/unidadeModel')


const cadastrarUnidade = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    unidadeModal.cadastrarUnidade(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}
const salvarEdicaoUnidade = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    unidadeModal.salvarEdicaoUnidade(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Unidade Salva com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}

const listarUnidades = async(req, res) => {
    unidadeModal.listarUnidades(req.body, res).then(r => {
        return res.status(201).json({arrayUnidades: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

const desativarUnidade = async(req, res) => {
    unidadeModal.desativarUnidade(req.body, res).then(r => {
        return res.status(201).json({arrayUnidades: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

module.exports = {
    cadastrarUnidade,
    listarUnidades,
    salvarEdicaoUnidade,
    desativarUnidade
}