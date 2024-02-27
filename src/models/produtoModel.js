
const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

const listarProdutos = async(prod,res) => {
    const sql = 'SELECT * FROM PRODUTOS';

    const produtos = await conexao.query(sql)

    return produtos
}

const cadastrarProduto = async(prod,res) => {
    const sql = 'INSERT INTO PRODUTOS (PROD_DESCRICAO, PROD_DATA_CADASTRO, PROD_DATA_EDICAO, PROD_UND, PROD_STATUS, PROD_IMG, PROD_FORN, PROD_GRUPO, PROD_USUARIO) ' +
                'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)';

                
    const dataAtual = funcoes.getDataAtual();

    const parametros = [
        prod.descricao,
        dataAtual,
        dataAtual,
        prod.und,
        Number(prod.status),
        prod.img,
        Number(prod.forn_cod),
        Number(prod.gp_cod),
        Number(prod.cod_usuario)
    ]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {
        console.log('aqui o erro',e)
        throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const getProdEdicao = async (prod,res) => {
    console.log('aqui esta a INFO', prod)

    const sql = ' SELECT prod.PROD_DESCRICAO, prod.PROD_IMG, prod.PROD_STATUS, prod.PROD_DATA_EDICAO, prod.PROD_UND,       ' +
                ' prod.PROD_COD, forn.FORN_DESCRICAO, forn.FORN_COD, usu.USU_NOME, usu.USU_COD, gp.GP_DESCRICAO, gp.GP_COD ' +
                ' FROM PRODUTOS AS prod                                                                                    ' +
                ' LEFT JOIN FORNECEDORES AS forn ON prod.PROD_FORN = forn.FORN_COD                                         ' +
                ' LEFT JOIN USUARIOS AS usu ON prod.PROD_USUARIO = usu.USU_COD                                             ' +
                ' LEFT JOIN GRUPOS AS gp ON prod.PROD_GRUPO = gp.GP_COD                                                    ' +
                ' WHERE prod.PROD_COD=$1                                                                                   ' ; 
        
    const parametros = [prod.prod_cod]

    console.log('aqui os parametos', parametros)
    return await conexao.oneOrNone(sql,parametros).then(r=>r)
    .catch(e => {
    console.log('aqui o erro',e)
    throw new Error('Não foi possivel salvar os dados')
    }) // aqui preciso fazer um trata erros
}

const salvarEdicaoProduto = async(prod,res) => {
    const sql = ' UPDATE PRODUTOS SET PROD_DESCRICAO = $2, PROD_DATA_EDICAO = $3, PROD_UND = $4, ' +
                '                     PROD_FORN = $5, PROD_GRUPO = $6                            ' +
                ' WHERE prod_cod = $1                                                            ' ;
                
    const dataAtual = funcoes.getDataAtual();

    console.log('teste aqui mano',prod)

    const parametros = [
        prod.cod,
        prod.descricao,
        dataAtual,
        prod.und,
        prod.forn_cod,
        prod.gp_cod    
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
    listarProdutos,
    cadastrarProduto,
    getProdEdicao,
    salvarEdicaoProduto
}