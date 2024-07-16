const empresaModel = require('../models/empresaModel')



const listarEmpresas = async(req, res) => {
    const usuarios = await  empresaModel.listarEmpresas();
    return res.status(200).json({arrayEmpresas: usuarios});
}


module.exports = {
    listarEmpresas
}