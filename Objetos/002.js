function solucao(peso1, peso2) {
    let cat1, cat2;
    if (peso1 < 55) cat1 = 1;
    if (peso1 < 65) cat1 = 2;
    if (peso1 < 75) cat1 = 3;
    if (peso1 < 85) cat1 = 4;
    if (peso1 >= 85) cat1 = 5;


    if (peso2 < 55) cat2 = 1;
    if (peso2 < 65) cat2 = 2;
    if (peso2 < 75) cat2 = 3;
    if (peso2 < 85) cat2 = 4;
    if (peso2 >= 85) cat2 = 5;

    if (cat1 == cat2) {
        return "PODEM LUTAR"
    } else {
        return "NAO PODEM LUTAR"
    }
    ////

    function solucao(pesos) {
        // seu codigo aqui
        if (Math.abs(pesos[0] - pesos[1] <= 5)) {
            return "PODEM LUTAR";
        } else {

            return "NAO PODEM LUTAR";
        }
        ///


        function solucao(altitude) {

            if (altitude <= 20) return "TROPOSFERA";
            if (altitude <= 50) return "ESTRATOSFERA";
            if (altitude <= 80) return " MESOSFERA";
            if (altitude <= 450) return "TERMOSFERA";
            if (altitude <= 900) return "EXOSFERA";



        } //

        function solucao(olhosNasLaterais) {
            if (olhosNasLaterais) {
                return "PRESA";
            } else {
                return "PREDADOR"
            }

            //





            function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

                let item1;
                let item2;
                let item3;
                // cada valor de itensColetados, marcar como true caso o item seja um dos 3 itens necessários
                for (let i = 0; i < itensColetados.length; i++) {
                    if (itensColetados[i] == itemNecessario1) item1 = true;
                    if (itensColetados[i] == itemNecessario2) item2 = true;
                    if (itensColetados[i] == itemNecessario3) item3 = true;
                }
                // após o loop, caso todos os 3 itens necessários estejam no inventário, permitir a luta contra o chefão
                if (item1 && item2 && item3) {
                    return "PODE ENFRENTAR"
                } else {
                    return "NAO PODE ENFRENTAR";
                }
            }    