function verificarIdade(idade) {
    if (idade <= 21) {
        return "jovem(a)"


    } else if (idade <= 65) {
        return "adulto(a)"


    } else {
        return "idoso(a)"

    }

} const retornoDaFuncao = verificarIdade(15);
console.log(retornoDaFuncao);
