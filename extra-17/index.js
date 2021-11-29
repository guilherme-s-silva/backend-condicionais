//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorDasParcelas = (valorDoProduto / 100) / quantidadeDoParcelamento;
const valorRestante = (valorDoProduto / 100) - valorPago;
const parcelasRestantes = valorRestante / valorDasParcelas;

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDasParcelas}`)