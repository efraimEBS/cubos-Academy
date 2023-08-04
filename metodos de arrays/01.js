const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const inverte = frutas.reverse();

const transformarEmString = frutas.join(", ");

console.log(transformarEmString);

frutas.pop();
frutas.shift();

console.log(frutas);

frutas.push('melão');
console.log(frutas);
