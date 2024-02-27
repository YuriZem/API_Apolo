const conexao = require('./conexao')

const listarPermissoes = async(obj,res) => {
    const sql = 'SELECT * FROM PERMISSOES';

    const unidades = await conexao.query(sql)

    return unidades
}

const cadastrarPermissao= async(obj,res) => {
    const sql = ' INSERT INTO PERMISSOES (permissao_desc,permissao_modulo_produto,permissao_modulo_usuario, ' +
                ' permissao_modulo_faz_pedido,permissao_modulo_validar_pedido)                              ' +
                ' VALUES ($1, $2, $3, $4, $5)                                                               ' ;

    const parametros = [
        obj.descricao,
        obj.modulo_produto,
        obj.modulo_usuario,
        obj.modulo_fazer_pedido,
        obj.modulo_validar_pedido,
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const salvarEdicaoPermissao = async(obj,res) => {
    const sql = ' UPDATE PERMISSOES SET PERMISSAO_DESC = $2, PERMISSAO_MODULO_PRODUTO = $3, ' +
                '        PERMISSAO_MODULO_USUARIO = $4, PERMISSAO_MODULO_FAZ_PEDIDO = $5,   ' +
                '        PERMISSAO_MODULO_VALIDAR_PEDIDO = $6                               ' +
                '  WHERE PERMISSAO_COD = $1                                                 ' ;

    const parametros = [
        obj.cod,
        obj.descricao,
        obj.modulo_produto,
        obj.modulo_usuario,
        obj.modulo_fazer_pedido,
        obj.modulo_validar_pedido,
        
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const desativarPermissao = async(obj,res) => {
    const sql = ' DELETE FROM PERMISSOES ' +
                '  WHERE PERMISSAO_COD = $1  ' ;

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

const getPermissaoPorCod = async(obj,res) => {
    const sql = ' SELECT * FROM PERMISSOES ' +
                '  WHERE PERMISSAO_COD = $1  ' ;

    const parametros = [
        obj.cod,
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros)
    .then((r) => {return r})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

module.exports = {
cadastrarPermissao,
desativarPermissao,
listarPermissoes,
salvarEdicaoPermissao,
getPermissaoPorCod
}