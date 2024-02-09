
const conexao = require('./conexao')

const listarProdutos = async(prod,res) => {
    const sql = 'SELECT * FROM PRODUTOS';

    const produtos = await conexao.query(sql)

    return produtos
}

module.exports = {

    listarProdutos
}