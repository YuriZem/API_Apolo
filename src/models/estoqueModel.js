const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')


const ajustaEstoque = async(prod,res) => {
    return new Promise((result, resolve) => {
    
    })
}

const ajustaEstoqueProd = async(prod,res) => {
    return new Promise((result, resolve) => {
        const sql = 'UPDATE PRODUTOS set quantidade = ?, ESTOQUES = ? where PROD_COD = ?'

        const parametros = [
            prod.prod_quantidade_depois,
            prod.prod_estoque,
            prod.prod_cod,
        ]
        console.log('aqui os parametros ', prod)
        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql,parametros, function (err, result) {
                 
                if (err) return res.status(500).json({erro:err});
    
                // if(r.usu_token == obj.token){
                    return res.status(201).json({retorno: 'deu certo'});
                // }else{
                //     return res.status(201).json({erro: err});
                // }
        
            });
        });
    })
}




module.exports = {
    ajustaEstoque,
    ajustaEstoqueProd
}