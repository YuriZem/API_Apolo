const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

 
const listarUnidades = async(obj,res) => {
    const sql = 'SELECT * FROM UNIDADES';

    // const unidades = await conexao.query(sql)

    // return unidades
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            // if(r.usu_token == obj.token){
                return res.status(201).json({retorno: result});
            // }else{
                // return res.status(201).json({erro: err});
            // }
    
        });
    });
}

const cadastrarUnidade = async(obj,res) => {
    const sql = 'INSERT INTO UNIDADES (UND_DESCRICAO, UND_SIGLA) ' +
                'VALUES ($1,$2)';

    const parametros = [
        obj.descricao,
        obj.sigla,
    ]

    // console.log('aqui os parametos', parametros)
    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
    //     console.log('aqui o erro',e)
    //     throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: 'deu certo'});
            }else{
                return res.status(201).json({erro: err});
            }
    
        });
    });
}

const salvarEdicaoUnidade = async(obj,res) => {
    const sql = ' UPDATE UNIDADES                         ' +
                ' SET UND_DESCRICAO = $2, UND_SIGLA =  $3 ' +
                ' WHERE UND_COD = $1                      ' ;

    const parametros = [
        obj.cod,
        obj.descricao,
        obj.sigla
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const desativarUnidade = async(obj,res) => {
    const sql = ' DELETE FROM UNIDADES ' +
                '  WHERE UND_COD = $1  ' ;

    const parametros = [
        obj.cod,
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

module.exports = {
    cadastrarUnidade,
    listarUnidades,
    salvarEdicaoUnidade,
    desativarUnidade
}
