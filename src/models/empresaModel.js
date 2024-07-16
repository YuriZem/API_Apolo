const conexao = require('./conexao')


const listarEmpresas = async (parametros) => { // PRECISO REVISAR ESSA FUNCAO COM A PARTE DOS PARAMETROS
    const sql = 'SELECT * FROM EMPRESAS';

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: result});
            }else{
                return res.status(201).json({erro: err});
            }
    
        });
    });
};

module.exports = {
    listarEmpresas
}