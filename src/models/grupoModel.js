const conexao = require('./conexao')

const listarGrupos = async(obj,res) => {
    const sql = 'SELECT * FROM GRUPOS';

    const grupos = await conexao.query(sql)

    return grupos
}

const cadastrarGrupo = async(obj,res) => {
    const sql = 'INSERT INTO GRUPOS (GP_DESCRICAO) ' +
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

const salvarEdicaoGrupo = async(obj,res) => {
    const sql = ' UPDATE GRUPOS SET gp_descricao = $2 ' +
                '             WHERE gp_cod = $1       ' ;

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

const desativarGrupo = async(obj,res) => {
    const sql = ' DELETE FROM GRUPOS ' +
                '  WHERE gp_cod = $1 ' ;

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
    cadastrarGrupo,
    listarGrupos,
    salvarEdicaoGrupo,
    desativarGrupo
}
