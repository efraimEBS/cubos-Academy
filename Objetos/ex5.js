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


let totalApagar = 0;
for (let produto of cartaoDeCosumo.produtosConsumidos) {
    totalApagar += produto.precounit * produto.quantidade



}
console.log(`ola senho ${cartaoDeCosumo.nome} que Deus lhe acompanhe o total a pagar é R$ ${(totalApagar / 100).toFixed(1)}`);
