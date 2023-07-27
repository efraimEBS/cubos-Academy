const pessoa = {
    nome: "Efraim",
    idade: 30,
    altura: 1.77,
    temCNH: false,
    apelidios: ["fray", "efra"]
}
let textocnh = "";

if (pessoa.temCNH === true) {
    textocnh = ("tem cnh");

} else {
    textocnh = ("nao tem cnh");
} console.log(`meu nome é ${pessoa.nome},minha idade é ${pessoa.idade} anos, minha altura é ${pessoa.altura}m, eu ${textocnh} `);

for (apelidio of pessoa.apelidios) {
    console.log(`-${apelidio}`);
}