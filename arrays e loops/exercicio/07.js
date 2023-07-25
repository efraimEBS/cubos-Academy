const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesComA = [];

for (const nome of nomes) {
    const primeiraLetra = nome.charAt(0).toLowerCase();
    if (primeiraLetra === 'a') {
        nomesComA.push(nome);
    }
}

console.log(nomesComA);