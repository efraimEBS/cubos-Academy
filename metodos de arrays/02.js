function divideEmGrupos(nomes, tamanhoDoGrupo) {
    if (!Array.isArray(nomes) || typeof tamanhoDoGrupo !== "number" || tamanhoDoGrupo <= 0) {

    }

    console.log("Grupos resultantes:");
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = nomes.slice(i, i + tamanhoDoGrupo);
        console.log(`Grupo ${Math.ceil((i + 1) / tamanhoDoGrupo)}: ${grupo.join(", ")}`);
    }
}

// Exemplo de uso da função
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
divideEmGrupos(nomes, tamanhoDoGrupo);
