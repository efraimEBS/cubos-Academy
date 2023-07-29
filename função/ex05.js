function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true

    } else
        return false
}
const retornoDaFuncao = verificarMaiorIdade(20);
if (retornoDaFuncao === true) {
    console.log("maior de idade");

} else {
    console.log("menor de idade ");
}