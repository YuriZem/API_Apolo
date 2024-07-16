const validaBodyCriarUsuario = (req,res,next) => {
    const {body} = req
    // if(body.nome == undefined){
    //     return res.status(400).json({mensagem:'O campo Nome é obrigaorio'})
    // }
    // if(body.nome == ''){
    //     return res.status(400).json({mensagem:'O campo Nome não pode ser vazio'})
    // }

    next();

}

module.exports = {
    validaBodyCriarUsuario
}