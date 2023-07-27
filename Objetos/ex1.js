const pessoa = {
    nome: "Efraim",
    idade: 30,
    altura: 1.77,
    temCNH: "nao",
    apelidios: "fray"
}

console.log(`meu nome é ${pessoa.nome} ,tenho ${pessoa.idade} anos, minha altura é ${pessoa.altura} ,tenho CNH ${pessoa.temCNH} ,meu apelidio é ${pessoa.apelidios}.`);

pessoa.nome = "jose";
pessoa.idade = 30;
pessoa.altura = 1.73;
pessoa.temCNH = "sim";
pessoa.apelidios = "jr e juninho";

console.log(`meu nome é ${pessoa.nome} ,tenho ${pessoa.idade} anos, minha altura é ${pessoa.altura} ,tenho CNH ${pessoa.temCNH} ,meu apelidio é ${pessoa.apelidios}.`);
