const palavra = "efraim"
let encontrado = false

for (let letra of palavra) {
    if (letra === "m") {
        console.log("tem letra m");
        encontrado = true
        break;

    }


}
if (encontrado === false) {
    console.log("nao tem m ");
}