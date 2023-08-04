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
