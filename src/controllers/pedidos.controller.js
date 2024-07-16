const pedidoModel = require('../models/pedidoModel')

const cadastrarPedido = async(req, res) => {
    console.log('testetestset')
    pedidoModel.cadastrarPedido(req.body,res).then(r => {
        //array temporario para listagem de produtos 
        return res.status(201).json({mensagem: r});
    }).catch(e =>{
        // console.log('aqui oq ',e.error)
        return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    });
}

const listarPedidos = async(req, res) => {
    pedidoModel.listarPedidos(req.body,res).then(async retorno => {
        const objRetorno = []
        
        await retorno.forEach((ped) => {
            if(objRetorno.length == 0){
                objRetorno.push({
                    pedido_data: ped.dt,
                    pedido_cod: ped.pedido_cod,
                    itens: [{
                        pedido_prod_cod: ped.pedido_prod_cod,
                        pedido_prod_desc: ped.pedido_prod_desc,
                        pedido_prod_tipo: ped.pedido_prod_tipo,
                        pedido_empresa_cod: ped.pedido_empresa_cod,
                        pedido_empresa_desc: ped.pedido_empresa_desc
                    }],
                    pedido_qtd: ped.pedido_qtd,
                    pedido_status: ped.pedido_status
                })
            }else{
                let indexInserir = 0;
                let verificaPedido = false

                objRetorno.map((i,index) => {
                    if(i.pedido_cod == ped.pedido_cod ){
                        indexInserir = index
                        verificaPedido = true
                    }
                })

                if(verificaPedido == true){
                    objRetorno[indexInserir].itens.push({
                        pedido_prod_cod: ped.pedido_prod_cod,
                        pedido_prod_desc: ped.pedido_prod_desc,
                        pedido_prod_tipo: ped.pedido_prod_tipo,    
                        pedido_empresa_cod: ped.pedido_empresa_cod,
                        pedido_empresa_desc: ped.pedido_empresa_desc
                    })
                }else{
                    objRetorno.push({
                        pedido_data: ped.dt,
                        pedido_cod: ped.pedido_cod,
                        itens: [{
                            pedido_prod_cod: ped.pedido_prod_cod,
                            pedido_prod_desc: ped.pedido_prod_desc,
                            pedido_prod_tipo: ped.pedido_prod_tipo,
                            pedido_empresa_cod: ped.pedido_empresa_cod,
                            pedido_empresa_desc: ped.pedido_empresa_desc
                        }],
                        pedido_qtd: ped.pedido_qtd,
                        pedido_status: ped.pedido_status
                    })
                }
            }
        })

        return res.status(201).json({arrayPedidos:objRetorno});
    }).catch(e =>{
        // console.log('aqui oq ',e.error)
        return res.status(400).json({mensagem:'mt erro aq'})     //preciso revisar e fazer um trata erros
    });
}

module.exports = {
    cadastrarPedido,
    listarPedidos
}