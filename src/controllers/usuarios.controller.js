
const usuarioModel = require('../models/usuarioModel')

const listarUsuarios = async(req, res) => {
    // const usuarios = await  usuarioModel.listarUsuarios();
    // return res.status(200).json({arrayUsuarios: usuarios});

    let a  = await usuarioModel.listarUsuarios({},res)
}

const cadastrarUsuario = async(req, res) => {
    let a  = await usuarioModel.cadastrarUsuario(req.body,res)
}

const salvarEdicaoUsuario = async(req, res) => {
    let a  = await  usuarioModel.editarUsuario(req.body)
}

const desativarUsuario = async(req, res) => {
    let a  = await usuarioModel.desativarUsuario(req.body, res)
}

const getInfoUsuario = async(req, res) => {
    // console.log('aqui a req',req)
    let a = await usuarioModel.getInfoUsuario(req.body, res)
    // .then(r => {
    //     return res.status(201).json({usuario: r})
    // }).catch(e => {
    //     return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    // })
}
const getInfoUsuarioPorToken = async(req, res) => {
    let a  = await usuarioModel.getInfoUsuarioPorToken(req.body, res)
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    salvarEdicaoUsuario,
    desativarUsuario,
    getInfoUsuario,
    getInfoUsuarioPorToken
}