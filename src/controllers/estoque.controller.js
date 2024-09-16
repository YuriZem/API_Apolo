
estoqueModel = require('../models/estoqueModel')

const ajustaEstoque = async(req, res) => {
    await estoqueModel.ajustaEstoqueProd(req.body,res)


    //aqui entra a parte complicada para um caralho 


    //preciso criar um json que salva os estoques e as quantidades 

    // await estoqueModel.ajustaEstoque(req.body,res)

}
 

module.exports = {
    ajustaEstoque
}