const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma_Pares = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        soma_Pares += numero;
    }
}

console.log(soma_Pares);