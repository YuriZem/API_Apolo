const conexao = require('./conexao')

const listarPermissoes = async(obj,res) => {
    return new Promise((result, resolve) => {

        const sql = 'SELECT * FROM PERMISSOES';

        // const unidades = await conexao.query(sql)

        // return unidades

        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql, function (err, result) {
                if (err) return res.status(500).json({erro:err});
                    return res.status(201).json({retorno: result});
        
            });
        });
    })

}

const cadastrarPermissao= async(obj,res) => {
    return new Promise((result, resolve) => {

            const sql = ' INSERT INTO PERMISSOES (permissao_desc,permissao_modulo_produto,permissao_modulo_usuario, ' +
            ' permissao_modulo_faz_pedido,permissao_modulo_validar_pedido)                              ' +
            ' VALUES (?,?,?,?,?)                                                               ' ;
            console.log(obj)
            const parametros = [
                obj.descricao,
                obj.modulo_produto,
                obj.modulo_usuario,
                obj.modulo_fazer_pedido,
                obj.modulo_validar_pedido,
            ]
            
            conexao.getConnection( function(err) {
                console.log('aqui o erro0', err)
                if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql,parametros, function (err2, result) {
                    console.log('aqui esse ',err2)
                    if (err2) return res.status(500).json({erro:err});
                    return res.status(201).json({retorno: result});
                    
                });
            });
        })
    }
    
    const salvarEdicaoPermissao = async(obj,res) => {
        return new Promise((result, resolve) => {
            const sql = '  UPDATE PERMISSOES SET PERMISSAO_DESC = ?, PERMISSAO_MODULO_PRODUTO = ?, ' +
                        '  PERMISSAO_MODULO_USUARIO = ?, PERMISSAO_MODULO_FAZ_PEDIDO = ?,          ' +
                        '  PERMISSAO_MODULO_VALIDAR_PEDIDO = ?                                     ' +
                        '  WHERE PERMISSAO_COD = ?                                                 ' ;

        const parametros = [
            obj.cod,
            obj.descricao,
            obj.modulo_produto,
            obj.modulo_usuario,
            obj.modulo_fazer_pedido,
            obj.modulo_validar_pedido,
            
        ]
        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql,parametros, function (err, result) {
                if (err) return res.status(500).json({erro:err});
                    return res.status(201).json({retorno: result});
        
            });
        });
    })
}

const desativarPermissao = async(obj,res) => {
    return new Promise((result, resolve) => {
        const sql = ' DELETE FROM PERMISSOES ' +
                    '  WHERE PERMISSAO_COD = ?  ' ;

        const parametros = [
            obj.cod,
        ]

        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql, function (err, result) {
                if (err) return res.status(500).json({erro:err});
                    return res.status(201).json({retorno: result});
        
            });
            });
    })
}


const getPermissaoPorCod = async(prod,res) => {
    return new Promise((result, resolve) => {
        const sql = ' SELECT * FROM PERMISSOES ' +
                    '  WHERE PERMISSAO_COD = ? ' ;
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql, function (err, result) {
            if (err) return res.status(500).json({erro:err});
                return res.status(201).json({retorno: result});
    
        });
    });
})

}




module.exports = {
    cadastrarPermissao,
    desativarPermissao,
    listarPermissoes,
    salvarEdicaoPermissao,
    getPermissaoPorCod
}