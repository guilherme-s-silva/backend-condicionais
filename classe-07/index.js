const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos >= 2855970) {
    console.log("PEGA LEAO"); //KKKKKKKKKKK
} else {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}