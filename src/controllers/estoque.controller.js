
estoqueModel = require('../models/estoqueModel')

const ajustaEstoque = async(req, res) => {
    await estoqueModel.ajustaEstoqueProd(req.body,res)

    // await estoqueModel.ajustaEstoque(req.body,res)

}
 

module.exports = {
    ajustaEstoque
}