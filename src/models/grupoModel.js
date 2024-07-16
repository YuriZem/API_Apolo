const conexao = require('./conexao')

const listarGrupos = async(obj,res) => {
    const sql = 'SELECT * FROM GRUPOS';

    // const grupos = await conexao.query(sql)

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

    // return grupos
}

const cadastrarGrupo = async(obj,res) => {
    const sql = 'INSERT INTO GRUPOS (GP_DESCRICAO) ' +
                'VALUES ($1)';

    const parametros = [
        obj.descricao,
    ]

    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
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

const salvarEdicaoGrupo = async(obj,res) => {
    const sql = ' UPDATE GRUPOS SET gp_descricao = $2 ' +
                '             WHERE gp_cod = $1       ' ;

    const parametros = [
        obj.cod,
        obj.descricao,
    ]

    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
    //     throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: 'salvo com sucesso'});
            }else{
                return res.status(201).json({erro: err});
            }
    
        });
    });
}

const desativarGrupo = async(obj,res) => {
    const sql = ' DELETE FROM GRUPOS ' +
                '  WHERE gp_cod = $1 ' ;

    const parametros = [
        obj.cod,
    ]

    // return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    // .then(() => {return 'deu certo'})
    // .catch(e => {
    //     throw new Error('Não foi possivel salvar os dados')
    // }) // aqui preciso fazer um trata erros
    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: 'removido com sucesso'});
            }else{
                return res.status(201).json({erro: err});
            }
    
        });
    });
}

module.exports = {
    cadastrarGrupo,
    listarGrupos,
    salvarEdicaoGrupo,
    desativarGrupo
}
