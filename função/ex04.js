const pessoa = {
    nome: "joao",
    idade: 12,
    profissao: "estudante",
    altura: 1.4

}

function apresentar(dados) {
    console.log(`ola! meu nome é ${pessoa.nome} sou um jovem de ${pessoa.idade} anos,
     ${pessoa.altura} m de altura, e sou ${pessoa.profissao}`);
}
apresentar(pessoa);