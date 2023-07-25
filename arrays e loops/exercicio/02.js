const letras = ["A", "e", "B", "C", "E", "z"];
let quantidade = 0;

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        quantidade++;
    }
}

if (quantidade === 0) {
    console.log("Nenhuma letra \"e\" ou \"E\" foi encontrada.");
} else {
    console.log(`foi encontrada  ${quantidade} letras "e" ou "E".`);
}
