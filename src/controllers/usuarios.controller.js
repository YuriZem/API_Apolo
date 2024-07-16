
const usuarioModel = require('../models/usuarioModel')

const listarUsuarios = async(req, res) => {
    const usuarios = await  usuarioModel.listarUsuarios();
    return res.status(200).json({arrayUsuarios: usuarios});
}

const cadastrarUsuario = async(req, res) => {
    usuarioModel.cadastrarUsuario(req.body,res).then(r => {
        //array temporario para listagem de produtos 
  
        return res.status(201).json({mensagem: 'Usuario Salvo com sucesso'});
    }).catch(e =>{
        // console.log('aqui oq ',e.error)
        return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    });
}

const salvarEdicaoUsuario = async(req, res) => {
    usuarioModel.editarUsuario(req.body).then(r => {
        return res.status(201).json({mensagem:r});
    }).catch(e =>{
        return res.status(400).json(e.error)
    });
}

const desativarUsuario = async(req, res) => {
    usuarioModel.desativarUsuario(req.body, res).then(r => {
        return res.status(201).json({arrayGrupo: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

const getInfoUsuario = async(req, res) => {
    let a = await usuarioModel.getInfoUsuario(req.body, res)
    // .then(r => {
    //     return res.status(201).json({usuario: r})
    // }).catch(e => {
    //     return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    // })
}
const getInfoUsuarioPorToken = async(req, res) => {
    usuarioModel.getInfoUsuarioPorToken(req.body, res).then(r => {
        return res.status(201).json({usuario: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Unidade'})
    })
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    salvarEdicaoUsuario,
    desativarUsuario,
    getInfoUsuario,
    getInfoUsuarioPorToken
}