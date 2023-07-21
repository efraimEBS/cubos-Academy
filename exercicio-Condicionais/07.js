const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 5000000; //emCentavos
//superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.
if (aposentada === true || portadoraDeDoenca === true) {
    console.log("isenta");


} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");



} else {
    console.log("PEGA LEAO")
}