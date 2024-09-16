grupoModel = require('../models/grupoModel')

const cadastrarGrupo = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    grupoModel.cadastrarGrupo(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}
const salvarEdicaoGrupo = async(req, res) => {
    // console.log('aqui chegou ?',req.body)

    grupoModel.salvarEdicaoGrupo(req.body,res).then(r => {
        return res.status(201).json({mensagem: 'Produto Salvo com sucesso'})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}

const listarGrupos = async(req, res) => {
    grupoModel.listarGrupos(req.body, res)
}

const desativarGrupo = async(req, res) => {
    grupoModel.desativarGrupo(req.body, res).then(r => {
        return res.status(201).json({arrayGrupo: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

module.exports = {
    cadastrarGrupo,
    listarGrupos,
    salvarEdicaoGrupo,
    desativarGrupo
}