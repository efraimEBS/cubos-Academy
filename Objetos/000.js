
let altitude = 50
function solucao(altitude) {

    if (altitude <= 20) {
        console.log("TROPOSFERA");

    } else if (altitude <= 50) {
        console.log("ESTRATOSFERA");

    } else if (altitude <= 80) {
        console.log(" MESOSFERA");

    } else if (altitude <= 450) {
        console.log("TERMOSFERA");

    } else {
        console.log("EXOSFERA");
    }




} solucao(altitude)




