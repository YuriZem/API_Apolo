const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

const listarUsuarios = async (parametros) => { // PRECISO REVISAR ESSA FUNCAO COM A PARTE DOS PARAMETROS
    console.log('parametros',parametros)
    const usuarios = await conexao.query('SELECT * FROM USUARIOS')

    return usuarios;
};

const cadastrarUsuario = async(usuario,res) => {
    const sql = 'INSERT INTO USUARIOS (USU_NOME,USU_DATA_CADASTRO,USU_DATA_EDICAO,USU_SENHA,USU_PERMISSAO,USU_EMPRESA_COD)' + 
                'VALUES ($1, $2,$3,$4,$5,$6)';

    // const dataAtual = 'f'
    const dataAtual = funcoes.getDataAtual()
    
    const parametros = [
        usuario.nome,
        dataAtual,
        dataAtual,
        usuario.senha,
        usuario.permissao_cod,
        usuario.empresa_cod
    ]
    
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: 'Sucesso'});
            }else{
                return res.status(201).json({retorno: 'Näo deu certo'});
            }
    
        });
    });
    
    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {throw new Error('Não foi possivel salvar os dados')}) // aqui preciso fazer um trata erros

    console.log('sera q chega aq')
}

const getInfoUsuario = async(obj,res) => {
    return new Promise((resolve, reject ) => {

    const sql = ' SELECT us.usu_cod, us.usu_nome, us.usu_permissao, ps.permissao_desc,               ' +
                '        ps.permissao_modulo_produto, ps.permissao_modulo_usuario,                   ' +
                '        ps.permissao_modulo_faz_pedido, ps.permissao_modulo_validar_pedido,         ' +
                '        us.usu_empresa_cod, em.empresa_desc                                         ' +
                '   FROM USUARIOS AS us                                                              ' +
                '   LEFT JOIN PERMISSOES AS ps ON us.usu_permissao = ps.permissao_cod                ' +
                '   LEFT JOIN EMPRESAS AS em ON CAST(us.usu_empresa_cod as INTEGER) = em.empresa_cod ' +
                '  WHERE us.usu_cod = ?                                                            ' ;

    const sql2 = ' UPDATE USUARIOS SET USU_TOKEN = $2 ' +
                 ' WHERE USU_COD = $1                 ' ;


    const parametros = [
        obj.cod,
    ]
    
    const parametros2 = [ // preciso revisar e remover esse update para uma funcao externa 
        obj.cod, obj.token
    ]


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
    // return await conexao.oneOrNone(sql2,parametros2) .then(async r =>  { // requisicao pra salvar o token no banco

    //     return await conexao.oneOrNone(sql,parametros).then((r) => {
    // console.log('aqui ta certo >')
            
    //         return r}) // requisicao pra pegar as informacoes do usuario
    //         .catch(e => {
    //             console.log('aqui o erro x', e)
    //             throw new Error('Não foi possivel salvar os dados')}) // aqui preciso fazer um trata erros
    //     }).catch(e => {
    //         console.log('aqui o erro', e)
    //         throw new Error('Não foi possivel salvar os dados')}) // aqui preciso fazer um trata erros
        })

}

const getInfoUsuarioPorToken = async(obj,res) => {

    const sql = ' SELECT us.usu_cod, us.usu_nome, us.usu_permissao, ps.permissao_desc,               ' +
                '        ps.permissao_modulo_produto, ps.permissao_modulo_usuario,                   ' +
                '        ps.permissao_modulo_faz_pedido, ps.permissao_modulo_validar_pedido,         ' +
                '        em.empresa_cod, em.empresa_desc                                             ' +
                '   FROM USUARIOS AS us                                                              ' +
                '   LEFT JOIN PERMISSOES AS ps ON us.usu_permissao = ps.permissao_cod                ' +
                '   LEFT JOIN EMPRESAS AS em ON CAST(us.usu_empresa_cod as INTEGER) = em.empresa_cod ' +
                '  WHERE us.usu_cod = $1                                                             ' ;


    const parametros = [
        obj.cod,
    ]
    
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: result});
            }else{
                return res.status(201).json({retorno: 'Erro'});
            }
    
        });
    });

    // return await conexao.oneOrNone(sql,parametros).then((r) => { return r}) // requisicao pra pegar as informacoes do usuario
    //     .catch(e => {throw new Error('Não foi possivel salvar os dados')}) // aqui preciso fazer um trata erros
}

const desativarUsuario = async() => {
    // fazer sql
}

const salvarEdicaoUsuario = async() => {
    // fazer sql
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    salvarEdicaoUsuario,
    desativarUsuario,
    getInfoUsuario,
    getInfoUsuarioPorToken
}