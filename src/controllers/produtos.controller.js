prodModel = require('../models/produtoModel')


const listarProdutos = async(req, res) => {
    prodModel.listarProdutos(req.body,res).then(r => {
              
        // const arr =  [
        //     {cod:'1',nome:'coca lata', grupoCod:'1',grupoNome:'refrigerante'},
        //     {cod:'2',nome:'coca 600', grupoCod:'1',grupoNome:'refrigerante'},
        //     {cod:'3',nome:'trento', grupoCod:'3',grupoNome:'doces'},
        //     {cod:'4',nome:'bacon', grupoCod:'4',grupoNome:'carnes'},
        //     {cod:'5',nome:'tilapia', grupoCod:'4',grupoNome:'carnes'},
        //     {cod:'6',nome:'fanta lata', grupoCod:'1',grupoNome:'carnes'},
        //     {cod:'7',nome:'file', grupoCod:'4',grupoNome:'carnes'},
        //     {cod:'8',nome:'vinho', grupoCod:'5',grupoNome:'vinhos'},
        // ]

        console.log('aqui deu certo',r)

        return res.status(201).json({arrayItens: r});

    }).catch(e =>{
        console.log('aqui o de verdade',e)
        // console.log('aqui oq ',e.error)
        return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    });

}

module.exports = {
    listarProdutos
}