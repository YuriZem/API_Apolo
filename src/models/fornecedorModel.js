const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

 
const listarFornecedores = async(obj,res) => {
    const sql = 'SELECT * FROM FORNECEDORES';

    const fornecedores = await conexao.query(sql)

    return fornecedores
}

const cadastrarFornecedor = async(obj,res) => {
    const sql = 'INSERT INTO FORNECEDORES (FORN_DESCRICAO) ' +
                'VALUES ($1)';

    const parametros = [
        obj.descricao,
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
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

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const desativarFornecedor = async(obj,res) => {
    const sql = ' DELETE FROM FORNECEDORES ' +
                '  WHERE FORN_COD = $1     ' ;
                
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
    cadastrarFornecedor,
    listarFornecedores,
    salvarEdicaoFornecedor,
    desativarFornecedor
}
