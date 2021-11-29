//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const desconto = valorDoProduto * 0.1;
    const valorASerPago = valorDoProduto - desconto;
    console.log(`Valor a ser pago: R$${(valorASerPago / 100).toFixed(2)}`);
} else if (tipoDePagamento === "credito") {
    const desconto = valorDoProduto * 0.05;
    const valorASerPago = valorDoProduto - desconto;
    console.log(`Valor a ser pago: R$${(valorASerPago / 100).toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    const desconto = valorDoProduto * 0.03;
    const valorASerPago = valorDoProduto - desconto;
    console.log(`Valor a ser pago: R$${(valorASerPago / 100).toFixed(2)}`);
}