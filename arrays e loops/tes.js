const nomeDePais = ["Brasil", "Argenta", "EUA", "Canada", "Peru"];
console.log(nomeDePais);
nomeDePais.shift(); // shift remove o primeiro elemento de um array
console.log(nomeDePais);
nomeDePais.unshift("Brasil"); // unshift acrecenta um elemento no começo do array
console.log(nomeDePais);
nomeDePais.push("Africa");// push acrecenta um elemento no final do array.
console.log(nomeDePais);
nomeDePais.pop("Africa");// pop romeve um elemento no final do array
console.log(nomeDePais);
console.log(nomeDePais.length); //length mostra quantos intem existem no array
nomeDePais[0] = "efraim" // modifica um elemento do array
console.log(nomeDePais);
console.log(nomeDePais[0]);