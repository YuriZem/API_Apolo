const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

const listarUsuarios = async (parametros) => { // PRECISO REVISAR ESSA FUNCAO COM A PARTE DOS PARAMETROS
    console.log('parametros',parametros)
    const usuarios = await conexao.query('SELECT * FROM USUARIOS')

    return usuarios;
};

const criarUsuario = async(usuario,res) => {
    const sql = 'INSERT INTO USUARIOS (USU_NOME,USU_DATA_CADASTRO,USU_DATA_EDICAO,USU_SENHA,USU_PERMISSAO)' + 
                'VALUES ($1, $2,$3,$4,$5)';

    const dataAtual = 'f'
    // const dataAtual = funcoes.getDataAtual()
    
    const parametros = [usuario.nome,dataAtual,dataAtual,usuario.senha,usuario.permissao]
    
    return await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r))
    .then(() => {return 'deu certo'})
    .catch(e => {throw new Error('Não foi possivel salvar os dados')}) // aqui preciso fazer um trata erros

    console.log('sera q chega aq')
}

const removerUsuario = async() => {
    // fazer sql
}

const editarUsuario = async() => {
    // fazer sql
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    editarUsuario,
    removerUsuario
}