const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

 
// const listarFornecedores = async(obj,res) => {
//     const sql = 'SELECT * FROM FORNECEDORES';

//     const fornecedores = await conexao.query(sql)

//     return fornecedores
// }

const listarFornecedores = async(prod,res) => {
    return new Promise((result, resolve) => {
        const sql = 'SELECT * FROM FORNECEDORES';
        conexao.getConnection( function(err) {
            if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
                conexao.query(sql, function (err, result) {
                if (err) return res.status(500).json({erro:err});
                    return res.status(201).json({retorno: result});
            });
        });
    })
}


const cadastrarFornecedor = async(obj,res) => {
    const sql = 'INSERT INTO FORNECEDORES (FORN_DESCRICAO) ' +
                'VALUES ($1)';

    const parametros = [
        obj.descricao,
    ]

    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const salvarEdicaoFornecedor = async(obj,res) => {
    const sql = ' UPDATE FORNECEDORES        ' +
                '    SET FORN_DESCRICAO = $2 ' +
                '  WHERE FORN_COD = $1       ' ;
                
    const parametros = [
        obj.cod,
        obj.descricao,
    ]

    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const desativarFornecedor = async(obj,res) => {
    const sql = ' DELETE FROM FORNECEDORES ' +
                '  WHERE FORN_COD = $1     ' ;
                
    const parametros = [
        obj.cod,
    ]

    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

module.exports = {
    cadastrarFornecedor,
    listarFornecedores,
    salvarEdicaoFornecedor,
    desativarFornecedor
}
