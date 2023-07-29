function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem(a)"


    } else if (idade <= 65) {
        return "adulto(a)"


    } else {
        return "idoso(a)"

    }
}
function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`ola! meu nome é ${pessoa.nome} sou ${faixaEtaria},
     tenho ${pessoa.altura} m de altura, e sou ${pessoa.profissao}`);

}
const pessoa1 = {
    nome: "jose",
    idade: 30,
    profissao: "professo",
    altura: 1.77
}
apresentar(pessoa1)