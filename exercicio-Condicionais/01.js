const jogador1 = "pedra";
const jogador2 = "tesoura";
if (jogador1 === jogador2) {
    console.log("enpate");
} else if
    (jogador1 === "pedra" && jogador2 === "tesoura") {
    console.log("Jogador 1 venceu!");
} else if (jogador1 === "tesoura" && jogador2 === "pedra") {
    console.log("Jogador 2 venceu!");
} else {
    console.log("Jogada inválida. Use apenas 'pedra' ou 'tesoura'.");
}


    // Exemplo
   // pedraPapelTesoura(jogador1, jogador2);
