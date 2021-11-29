//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 100000;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1800000) {
    const valorDaParcela = rendaMensalEmCentavos * 18 / 100;
    console.log(`O valor da parcela desse mês é de R$ ${valorDaParcela / 100} reais!`);
} else if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é de R$ 0 reais. Nenhum valor é devido pois o prazo de 60 meses foi ultrapassado.");
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é de R$ 0 reais. Nenhum valor é devido pois a dívida de R$ 18000 já foi quitada!");
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
}