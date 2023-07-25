const palavra = "alemahna";
let encontrado = false;
for (let letra of palavra) {
    if (letra === "h") {
        console.log("tem a letra h");
        encontrado = true;
        break;
    }
}
if (encontrado === false) {
    console.log("nao tem h")
}