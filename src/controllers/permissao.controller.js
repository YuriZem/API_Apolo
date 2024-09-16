permissaoModal = require('../models/permissaoModel')


const cadastrarPermissao = async(req, res) => {
    let a = await permissaoModal.cadastrarPermissao(req.body,res)
}

const listarPermissoes = async(req, res) => {
    let a = await permissaoModal.listarPermissoes(req.body, res)
}

const salvarEditarPermissao = async(req, res) => {
    let a = await permissaoModal.salvarEdicaoPermissao(req.body,res)
}

const desativarPermissao = async(req, res) => {
    let a = await permissaoModal.desativarPermissao(req.body, res)
}

const getPermissaoPorCod = async(req, res) => {
    let a = await permissaoModal.getPermissaoPorCod(req.body, res)
}

module.exports = {
    cadastrarPermissao,
    listarPermissoes,
    salvarEditarPermissao,
    desativarPermissao,
    getPermissaoPorCod
}