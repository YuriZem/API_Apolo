const conexao = require('./conexao')

const validarLogin = async(obj,res) => {
    return new Promise( (result , resejct ) => {

        const sql = ' SELECT * FROM USUARIOS AS us                   ' +
                    '  WHERE us.USU_NOME = ? AND  us.USU_SENHA = ? ' ;
        
        const parametros = [
            obj.usuario,
            obj.senha,
        ]

        console.log('aba')
        
        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
                // conexao.end();
            console.log(err)        
                if (err) return res.status(500).json({erro:err});
                
                // console.log(result)
                return res.status(201).json({usuario: result});
            });
        });
        
    })
}

const verificaToken = async(obj,res) => {

    const sql = ' SELECT usu_token FROM USUARIOS WHERE usu_cod = $1 ';

    const parametros = [
        obj.cod,
    ]

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: true});
            }else{
                return res.status(201).json({retorno: false});
            }
    
        });
    });
}

module.exports = {
    validarLogin,
    verificaToken
}