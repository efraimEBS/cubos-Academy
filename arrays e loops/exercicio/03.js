const numeros = [54, 22, 14, 10, 284];

let posicaoNumero10 = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicaoNumero10 = i;
        break;
    }
}

console.log(posicaoNumero10);


