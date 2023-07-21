const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura
if (idade <= 12 || idade >= 65 || possuiPatologia === true || altura < 150) {
    console.log("ACESSO NEGADO");
    //10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)

} else if (ehEstudante === true || idade < 18) {
    console.log("voce ira pagar 10 R$");

} else {
    console.log("você ira pagar 20 R$")

}