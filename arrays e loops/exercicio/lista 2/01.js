function solucao(stringCorrompida) {
    let dadosP = '';
    for (let caracter of stringCorrompida) {

        if (caracter === '!' || caracter === '@' || caracter === '#' || caracter === '$' || caracter === '%' || caracter === '&'
            || caracter === '*' || caracter === '(' || caracter === ')' || caracter === '.') {

        } else {
            dadosP += caracter;

        }

    } console.log(dadosP);
}

function processData(input) {
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});