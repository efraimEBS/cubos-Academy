function solucao(peso1, peso2) {
    function getCategoria(peso) {
        if (peso < 55) {
            return "Peso leve";
        } else if (peso < 65) {
            return "Peso meio-médio";
        } else if (peso < 75) {
            return "Peso médio";
        } else if (peso < 85) {
            return "Peso meio-pesado";
        } else {
            return "Peso pesado";
        }
    }

    const categoria1 = getCategoria(peso1);
    const categoria2 = getCategoria(peso2);

    if (categoria1 === categoria2) {
        return "PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR";
    }
}
