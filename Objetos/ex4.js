const cartaoDeCosumo = {
    nome: "efraim",
    idade: 30,

    produtosConsumidos: [
        {
            nome: "cerveja",
            precounit: 8000,
            quantidade: 10



        },
        {
            nome: "espetinho",
            precounit: 5000,
            quantidade: 5

        },
        {
            nome: "cecaldinho",
            precounit: 5000,
            quantidade: 2

        }

    ]
};

console.log(cartaoDeCosumo.nome);
console.log(cartaoDeCosumo.idade);
cartaoDeCosumo.idade = 25// modificacao
console.log(cartaoDeCosumo.idade);
console.log(cartaoDeCosumo.produtosConsumidos[cartaoDeCosumo.produtosConsumidos.length - 1]);//length acessa o ultimo numero do array.