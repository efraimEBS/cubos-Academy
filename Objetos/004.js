function solucao(pesos) {
    const diferencaDePesos = Math.abs(pesos[0] - pesos[1]);

    if (diferencaDePesos <= 5) {
        return "PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR";
    }
}