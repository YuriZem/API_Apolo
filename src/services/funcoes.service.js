
const getDataAtual = () => {
    const dataAtual = new Date().toLocaleDateString();
    const novaData = dataAtual.split('/');
    const dataFinal = novaData[2] + '-' + novaData[1] + '-' + novaData[0];
    return dataFinal;
}

module.exports = {
    getDataAtual
}