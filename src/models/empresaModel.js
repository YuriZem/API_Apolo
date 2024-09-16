const conexao = require('./conexao')


const listarEmpresas = async (parametros) => { // PRECISO REVISAR ESSA FUNCAO COM A PARTE DOS PARAMETROS
    return new Promise((resolve, reject ) => {


        const sql = 'SELECT * FROM EMPRESAS';

        conexao.getConnection( function(err) {
            // if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err2, result) {
                // if (err2) return res.status(500).json({erro:err2});
                resolve(result)
            });
        });
    })

}

module.exports = {
    listarEmpresas
}