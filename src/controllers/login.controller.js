loginModel = require('../models/loginModel')


const validarLogin = async(req, res) => {
    console.log('ue')
    let a = await  loginModel.validarLogin(req.body,res)
    // .then(r => {
    //     return res.status(201).json({usuario: r})
    // }).catch(e => {
    //     return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    // })
}

const verificaToken = async(req, res) => {
    loginModel.verificaToken(req.body,res).then(r => {
        return res.status(201).json({valida: r})
    }).catch(e => {
        return res.status(400).json({mensagemErro: 'Erro Ao salvar Produto'})
    })
}


module.exports = {
    validarLogin,
    verificaToken
}