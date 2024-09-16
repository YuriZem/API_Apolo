
const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

const listarProdutos = async(prod,res) => {
    return new Promise((result, resolve) => {


    const sql = 'SELECT * FROM PRODUTOS';
    console.log('1')
    conexao.getConnection( function(err) {
    console.log('2')

        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
    console.log('3')

            conexao.query(sql, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            // if(result.usu_token == obj.token){
            console.log('chegou aqui ')
                return res.status(201).json({retorno: result});
            // }else{
                // return res.status(201).json({erro: err});
            // }
    
        });
    });
})

}
const getProdCodigoBarras = async(prod,res) => {
    return new Promise((result, resolve) => {


    const sql = 'SELECT * FROM PRODUTOS p where p.CODIGO_BARRAS = ?';
    console.log('aquio op ',prod.codBarras)
    const parametros = [prod.codBarras]

    conexao.getConnection( function(err) {
    console.log('2')

        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
    console.log('3')

            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            // if(result.usu_token == obj.token){
            console.log('chegou aqui ')
                return res.status(201).json({result});
            // }else{
                // return res.status(201).json({erro: err});
            // }
    
        });
    });
})

}
const cadastrarProduto = async(prod,res) => {
    const sql = 'INSERT INTO PRODUTOS (PROD_DESCRICAO, PROD_DATA_CADASTRO, PROD_DATA_EDICAO, PROD_UND, PROD_STATUS, PROD_IMG, PROD_FORN, PROD_GRUPO, PROD_USUARIO,CODIGO_BARRAS) ' +
                'VALUES (?,?,?,?,?,?,?,?,?,?)';

    const dataAtual = funcoes.getDataAtual();
//teste
    const parametros = [
        prod.descricao,
        dataAtual,
        dataAtual,
        prod.und,
        Number(prod.status),
        prod.img,
        Number(prod.forn_cod),
        Number(prod.gp_cod),
        Number(prod.cod_usuario),
        prod.codigo_barras
    ]

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            // if(r.usu_token == obj.token){
                return res.status(201).json({retorno: 'Deu certo'});
            // }else{
            //     return res.status(201).json({erro: err});
            // }
    
        });
    });
    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
    //     throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros
}

const getProdEdicao = async (prod,res) => {

    const sql = ' SELECT prod.PROD_DESCRICAO, prod.PROD_IMG, prod.PROD_STATUS, prod.PROD_DATA_EDICAO, prod.PROD_UND,       ' +
                ' prod.PROD_COD, forn.FORN_DESCRICAO, forn.FORN_COD, usu.USU_NOME, usu.USU_COD, gp.GP_DESCRICAO, gp.GP_COD ' +
                ' FROM PRODUTOS AS prod                                                                                    ' +
                ' LEFT JOIN FORNECEDORES AS forn ON prod.PROD_FORN = forn.FORN_COD                                         ' +
                ' LEFT JOIN USUARIOS AS usu ON prod.PROD_USUARIO = usu.USU_COD                                             ' +
                ' LEFT JOIN GRUPOS AS gp ON prod.PROD_GRUPO = gp.GP_COD                                                    ' +
                ' WHERE prod.PROD_COD= ?                                                                             ' ; 
        
    const parametros = [prod.prod_cod]


    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            // if(r.usu_token == obj.token){
                return res.status(201).json({retorno: result});
            // }else{
            //     return res.status(201).json({erro: err});
            // }
    
        });
    });
    // return await conexao.oneOrNone(sql,parametros).then(r=>r)
    // .catch(e => {
    // throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros
}

const salvarEdicaoProduto = async(prod,res) => {
    const sql = ' UPDATE PRODUTOS SET PROD_DESCRICAO = $2, PROD_DATA_EDICAO = $3, PROD_UND = $4, ' +
                '                     PROD_FORN = $5, PROD_GRUPO = $6                            ' +
                ' WHERE prod_cod = $1                                                            ' ;
                
    const dataAtual = funcoes.getDataAtual();

    const parametros = [
        prod.cod,
        prod.descricao,
        dataAtual,
        prod.und,
        prod.forn_cod,
        prod.gp_cod    
    ]

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
    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
    //     throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros
}




const vincularCodBarrasComProd = async(prod,res) => {

    console.log('pq aqui ele nao deu certo', prod)
    const sql = ' UPDATE PRODUTOS SET CODIGO_BARRAS = ?  WHERE PROD_COD = ? ';

    const parametros = [
        prod.codigo_barras,
        prod.PROD_COD
    ]

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
        conexao.query(sql,parametros, function (err, result) {
            if (err) return res.status(500).json({erro:err});
            return res.status(201).json({retorno: 'Deu certo'});
        });
    });

}
module.exports = {
    listarProdutos,
    cadastrarProduto,
    getProdEdicao,
    salvarEdicaoProduto,
    getProdCodigoBarras,
    vincularCodBarrasComProd,
}