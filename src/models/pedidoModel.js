const conexao = require('./conexao')
const funcoes = require('../services/funcoes.service')

const cadastrarPedido = async(pedido,res) => {

    const sqlInsert = ' INSERT INTO PEDIDOS( pedido_cod, pedido_prod_desc, pedido_prod_cod,           ' +
                '                      pedido_qtd_prod, pedido_qtd, pedido_data, pedido_obs,    ' +
                '                      pedido_status, pedido_prod_tipo, pedido_empresa_cod,     ' +
                '                      pedido_empresa_desc, pedido_semana, pedido_ano )         ' +
                '             VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 ) ' ;
    


    // retorna se é um codigo novo ou não
    obj = {
        pedido_semana: pedido.semana_ano,
        pedido_ano: pedido.semana_ano 
    }

    const cod = await retornaCodigo(obj)
    const dataAtual = funcoes.getDataAtual()
    
    console.log('teste aqui ')
    console.log('pedido',pedido)

    pedido.itens.map(async i => {
    const parametros = [
            cod,//aqui o codigo do pedido preciso descobrir como vou fazer 
            i.prod_descricao,
            i.prod_cod,
            i.qtd,
            pedido.qtdPedido,
            dataAtual,
            i.obs,
            'Aguardando',
            '', // REVISAR o TIPO
            pedido.empresa_cod,
            pedido.empresa_desc,
            pedido.semana_ano,
            pedido.pedido_ano
        ]
        // await conexao.oneOrNone(sql,parametros).then(r=>console.log('aqui outro r',r)).catch(e => console.log('erro', e))
        await conexao.oneOrNone(sqlInsert,parametros).then(r=>console.log('aqui outro r',r)).catch(e => console.error('erro', e))
    })
    
    return 'Pedido Criado com sucesso' //preciso fazer o trata erros
}

const listarPedidos = async (parametros) => { // PRECISO REVISAR ESSA FUNCAO COM A PARTE DOS PARAMETROS
    // console.log('parametros',parametros)
    // // const pedidos = await conexao.query(' SELECT * FROM PEDIDOS ')
    const sql = " SELECT *, TO_CHAR(pedido_data, 'DD-MM-YYYY') as dt FROM PEDIDOS "

    // return pedidos;

    conexao.getConnection( function(err) {
        if (err) res.status(500).json({erro:err}); //preciso fazer um trata erros
            conexao.query(sql,parametros, function (err, result) {
             
            if (err) return res.status(500).json({erro:err});

            if(r.usu_token == obj.token){
                return res.status(201).json({retorno: result});
            }else{
                return res.status(201).json({erro: err});
            }
    
        });
    });
};

const retornaCodigo = async (obj) => {
    const sql = ' SELECT PEDIDO_COD FROM PEDIDOS               ' +
                ' WHERE PEDIDO_SEMANA = $1 AND PEDIDO_ANO = $2 ';

    const parametros = [
        obj.pedido_semana,
        obj.pedido_ano
    ]

    const retorno = await conexao.oneOrNone(sql,parametros).then(r=>{
        console.log('aqui esta o retorno ', r)
        return r
    }).catch(e => {
            console.error('erro', e)
    })

    if(retorno != null){
        return retorno 
    }else{
        const cod = await conexao.query(" SELECT MAX(pedido_cod) as pedido_cod FROM PEDIDOS ") 
        if(cod == null){
            return 1
        }else{
            return cod[0].pedido_cod + 1
        }
    }

}

module.exports = {
    cadastrarPedido,
    listarPedidos
}