
const usuarioModel = require('../models/usuarioModel')

const listarUsuarios = async(req, res) => {
    const usuarios = await  usuarioModel.listarUsuarios();
    return res.status(200).json({message: usuarios});
}

const criarUsuario = async(req, res) => {
    usuarioModel.criarUsuario(req.body,res).then(r => {
        console.log('aqui deu cerrto')
        console.log('aqui a msg', r)

        //array temporario para listagem de produtos 
  


        return res.status(201).json({arrayItens: arr});
    }).catch(e =>{
        console.log('aqui o de verdade',e)
        // console.log('aqui oq ',e.error)
        return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    });
}

const removerUsuario = async(req, res) => {
    usuarioModel.removerUsuario(req.body).then(r => {
        return res.status(201).json({mensagem:r});
    }).catch(e =>{
        console.log('aqui o de verdade',e)
        return res.status(400).json(e.error)
    });
}
const editarUsuario = async(req, res) => {
    usuarioModel.editarUsuario(req.body).then(r => {
        return res.status(201).json({mensagem:r});
    }).catch(e =>{
        console.log('aqui o de verdade',e)
        return res.status(400).json(e.error)
    });
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    editarUsuario,
    removerUsuario
}